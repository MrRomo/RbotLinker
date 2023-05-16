export default {
  db: {
    database: process.env.DB_NAME || 'mrromo',
    username: process.env.DB_USER || 'mrromo',
    password: process.env.DB_PASS || 'mrromo',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
  auth: {
    secret: process.env.SECRET || 'mrromo'
  }
}
