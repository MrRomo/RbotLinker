import { createPromptModule } from 'inquirer'
import chalk from 'chalk'
import db from './index.js'

const prompt = createPromptModule()

async function setup () {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'This will destroy your database, are you sure?'
    }
  ])

  if (!answer.setup) {
    return console.log('Nothing happened :)')
  }

  const config = {
    database: process.env.DB_NAME || 'mrromo',
    username: process.env.DB_USER || 'mrromo',
    password: process.env.DB_PASS || 'mrromo',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
