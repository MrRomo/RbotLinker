import Vue from 'vue'
import App from './app.vue'
import Agent from './agent.vue'
import Metric from './metric.vue'

Vue.component('agent', Agent)
Vue.component('metric', Metric)

// eslint-disable-next-line no-unused-vars
const vm = new Vue({
  el: '#app',
  render (createElement) {
    return createElement(App)
  }
})
