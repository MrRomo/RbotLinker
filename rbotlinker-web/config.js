'use strict'

module.exports = {
  endpoint: process.env.API_ENDPOINT || 'http://localhost:3000',
  serverHost: process.env.SERVER_HOST || 'http://localhost:8080',
  mqttHost: process.env.MQTT_HOST || 'mqtt://localhost',
  apiToken: process.env.API_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJib3RsaW5rZXIiLCJhZG1pbiI6dHJ1ZSwicGVybWlzc2lvbnMiOlsibWV0cmljczpyZWFkIl0sImlhdCI6MTUwMjM5MzQxMX0.dNP2RJQMsEwH6UKphRrwmebHpnwlaaMJLH5_MloSNjA'
}
