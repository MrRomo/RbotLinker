import http from 'http'
import path from 'path'
import express from 'express'
import asyncify from 'express-asyncify'
import socketio from 'socket.io'
import chalk from 'chalk'
import RbotlinkerAgent from 'rbotlinker-agent'
import {fileURLToPath} from 'url';

import proxy from './proxy.js'
import { pipe } from './utils.js'

const port = process.env.PORT || 8080
const app = asyncify(express())
const server = http.createServer(app)
const io = socketio(server)
const agent = new RbotlinkerAgent()

const __filename = fileURLToPath(import.meta.url);

app.use(express.static(path.join(path.dirname(__filename), 'public')))
app.use('/', proxy)

// Socket.io / WebSockets
io.on('connect', socket => {
  console.log(`Connected ${socket.id}`)

  pipe(agent, socket)
})

// Express Error Handler
app.use((err, req, res, next) => {
  console.log(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

function handleFatalError(err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

server.listen(port, () => {
  console.log(`${chalk.green('[rbotlinker-web]')} server listening on port ${port}`)
  agent.connect()
})
