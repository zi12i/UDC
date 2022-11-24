import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth',
    component: () => import('../views/auth/signIn'),
    children: [
      // {
      //   path: '/auth/signin',
      //   component: () => import('../views/auth/signIn')
      // },
      {
        path: '/auth/signup',
        component: () => import('../views/auth/mailAuth')
      },
      // {
      //   path: '/auth/logout',
      //   component: () => import('../views/auth/logout')
      // },
      {
        path: '/auth/find',
        component: () => import('../views/auth/find')
      }
    ]
  },
  // {
  //   path: '/signin',
  //   name: 'signin',
  //   component: () => import('../views/auth/signIn.vue')
  // },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: () => import('../views/auth/signUp.vue')
  // },
  // {
  //   path: '/find',
  //   name: 'find',
  //   component: () => import('../views/auth/find.vue')
  // },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/board/boardList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
