import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Members from './views/Members.vue'
import MemberDetails from './views/MemberDetails.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'events',
      component: Events
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    },
    {
      path:'/members/:name/:id',
      component: MemberDetails
    }
  ]
})
