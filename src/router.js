import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Winners from '@/views/Winners'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/winners',
      name: 'winner',
      component: Winners
    }
  ]
})
