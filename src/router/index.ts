import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from '../views/main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: main,
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects"*/'../views/projects.vue'),
  },
  {
    path: '/dLog',
    name: 'dLog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dLog" */ '../views/dLog.vue')
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
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() =>resolve({ top:0, behavior: 'smooth' }), 800)
    // return {top:null, left:null, behavior: null}
    })
  }
})

export default router
