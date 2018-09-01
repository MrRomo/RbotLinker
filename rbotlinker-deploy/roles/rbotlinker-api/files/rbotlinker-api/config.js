'use strict'

const debug = require('debug')('rbotlinker:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'rbotlinker',
    username: process.env.DB_USER || 'rbotlinker',
    password: process.env.DB_PASS || 'rbotlinker',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s)
  },
  auth: {
    secret: process.env.SECRET || 'rbotlinker'
  }
}
