import { createRouter, createWebHashHistory } from 'vue-router'
import Simulation from "../views/Simulation.vue"
import Stack from "@/components/Stack.vue"
import Queue from "@/components/Queue.vue"

const routes = [
  {
    path: '/simulation',
    name: 'Simulation',
    component: Simulation
  },
  {
    path: '/stack',
    name: 'Stack',
    component: Stack
  },
  {
    path: '/queue',
    name: 'Queue',
    component: Queue
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
