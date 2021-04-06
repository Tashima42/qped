import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/simulation',
    name: 'Simulation',
    component: () => import("../views/Simulation.vue")
  },
  {
    path: '/source-code',
    name: 'SourceCode',
    component: () => import("../views/SourceCode.vue"),
  },
  {
    path: '/function',
    name: 'Function',
    component: () => import("../views/Function.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
