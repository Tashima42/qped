import { createRouter, createWebHashHistory } from 'vue-router'
import Simulation from "../views/Simulation.vue"
import SourceCode from "../views/SourceCode.vue"
import HelloWorld from "@/components/HelloWorld.vue"
import Function from "../views/Function.vue"
import LinearSearch from "@/components/LinearSearch.vue"

const routes = [
  {
    path: '/simulation',
    name: 'Simulation',
    component: Simulation
  },
  {
    path: '/source-code',
    name: 'SourceCode',
    component: SourceCode,
  },
  {
    path: '/source-code/hello-world',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/function',
    name: 'Function',
    component: Function
  },
  {
    path: '/function/linear-search',
    name: 'LinearSearch',
    component: LinearSearch
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
