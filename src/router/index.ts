import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from '../views/main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */'../views/projects.vue')
  },
  {
    path: '/dlog',
    name: 'dlog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/dlog.vue')
  },
  {
    path: '/dlog/2019',
    name: '2019',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/dlog/2019.vue')
  },
  {
    path: '/dlog/2020',
    name: '2020',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/dlog/2020.vue')
  },
  {
    path: '/dlog/2021',
    name: '2021',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/dlog/2021.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 800)
    // return {top:null, left:null, behavior: null}
    })
  }
})

export default router
