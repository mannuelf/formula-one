import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'

// set the base url and some header defaults, DRY.
axios.defaults.baseUrl = 'http://ergast.com/api/f1/'
axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
