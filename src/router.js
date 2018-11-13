import Vue from 'vue'
import Router from 'vue-router'
import Champions from '@/views/Champions'
import AllWinners from '@/views/AllWinners'

Vue.use(Router)

// Setup Vue Router to with history mode enabled to allow us to have pretty urls without hash bangs.
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/champions',
      name: 'Champions',
      component: Champions,
      props: true
    },
    {
      // I will use props to send the race season(year) to next view
      path: '/all-winners/:Season',
      name: 'AllWinners',
      component: AllWinners,
      props: true
    }
  ]
})
