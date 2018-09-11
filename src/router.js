import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import FAQ from './components/FAQ.vue'
import Login from './components/Login.vue';
import TicketsLayout from './components/TicketsLayout.vue'
import state from './state'
import MewTicket from './components/NewTicket.vue'
import Tickets from './components/Tickets.vue'
import Ticket from './components/Ticket.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/faq', name: 'faq', component: FAQ },
  { path: '/login', name: 'login', component: Login, meta: {guest: true}}, 
  { path: '/tickets', name: 'tickets', component: TicketsLayout, meta: {private: true}, children: [
    { path: '', name: 'tickets', component: Tickets },
    { path: 'new', name: 'new-ticket', component: MewTicket },
    { path: ':id', name: 'ticket', component: Ticket, props: true },
  ]},
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(r => r.meta.private) && !state.user) {
    // Todo redirect to login
    next({
      name:'login',
      params: {
        wantedRoute: to.fullPath
      }
    })
    return
  }
  if(to.matched.some(r => r.meta.guest) && state.user){
    next({ name: "home" })
    return 
  }

  console.log('to', to.name)
  next()
})

export default router