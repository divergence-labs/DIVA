import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Diagnostic from '@/components/Diagnostic'
import GuestSignUp from '@/components/GuestWelcome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/diagnostic',
      name: 'Diagnostic',
      component: Diagnostic
    },
    {
      path: '/guest',
      name: 'GuestSignUp',
      component: GuestSignUp
    }
  ],
  mode: 'history'
})
