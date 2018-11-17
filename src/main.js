import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import EventBus from '@/eventBus.js'

window.EventBus = new Vue();

Vue.config.productionTip = false

Vue.component('AllWinners', () => import('@/views/AllWinners.vue'))
Vue.component('Champions', () => import('@/views/Champions.vue'))

new Vue({
  router,
  EventBus,
  render: h => h(App),
}).$mount('#app')

