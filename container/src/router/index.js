import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: '/cslegal',
    component: () => import("csLegal/App"),
  },
  {
    path: '/baseapp',
    component: () => import("baseApp/App"),
  }
]

export default new VueRouter({
  routes: routes
})
