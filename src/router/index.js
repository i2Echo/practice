import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Games from '@/pages/Games'
import GameDetail from '@/pages/GameDetail'
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import About from '@/pages/About'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
    meta: { auth: false }
  },
  {
    path: '/login',
    component: Login,
    meta: { auth: false }
  },
  {
    path: '/reg',
    component: Reg,
    meta: { auth: false }
  },
  {
    path: '/games',
    component: Games,
    meta: { auth: false }
  },
  {
    path: '/games/:gid',
    component: GameDetail,
    props: true,
    meta: { auth: false }
  },
  {
    path: '/about',
    component: About,
    meta: { auth: false }
  }
]

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})

// router.beforeEach(() => ({}))

export default router
