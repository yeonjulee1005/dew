import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from '../views/main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dev Records',
    component: main
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */'../views/projects.vue')
  },
  {
    path: '/dLog',
    name: 'Picture History',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/dLog.vue')
  },
  {
    path: '/dLog/2019',
    name: '2019',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/dLog/2019.vue')
  },
  {
    path: '/dLog/2020',
    name: '2020',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/dLog/2020.vue')
  },
  {
    path: '/dLog/2021',
    name: '2021',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/dLog/2021.vue')
  },
  {
    path: '/projects/calculator',
    name: 'Custom Calculator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dlog" */ '../views/projects/calculator.vue')
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

router.beforeEach((to, from, next) => {
  document.title = `이연주 | ${String(to.name)}`
  next()
})

export default router
