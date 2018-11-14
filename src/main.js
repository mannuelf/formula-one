import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import EventBus from '@/eventBus.js'

window.EventBus = new Vue();

Vue.config.productionTip = false

Vue.component('AllWinners', () => import('@/views/AllWinners'))
Vue.component('Champions', () => import('@/views/Champions'))

new Vue({
  router,
  EventBus,
  render: h => h(App),
}).$mount('#app')

