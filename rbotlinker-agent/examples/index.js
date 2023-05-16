

const RbotAgent = require('../')
//random number gen 
const uuid = require('uuid')
const agent = new RbotAgent({
  name: `Agente test - ${uuid.v4()}`,
  username: 'admin',
  interval: 1000,
  mqtt: {
    // host: 'mqtt://api.ricardoromo.co'
   host: 'mqtt://localhost'
  }
})

agent.addMetric('rss', function getRss () {
  return process.memoryUsage().rss
})

agent.addMetric('promiseMetric', function getRandomPromise () {
  return Promise.resolve(Math.random()*20)
})

agent.addMetric('callbackMetric', function getRandomCallback (callback) {
  setTimeout(() => {
    callback(null, Math.random())
  }, 1000)
})

agent.connect()

// This agent only
agent.on('connected', handler)
agent.on('disconnected', handler)
agent.on('message', handler)

//Other Agents
agent.on('agent/connected', handler)
agent.on('agent/disconnected', handler)
agent.on('agent/message', handler)

function handler (payload) {
  console.log(payload)
}

//setTimeout(() => agent.disconnect(), 20000)
