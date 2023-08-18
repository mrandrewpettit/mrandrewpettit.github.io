import Vue from 'vue'
import VueRouter from 'vue-router'
import VScrollLock from 'v-scroll-lock'

Vue.use(VueRouter)
Vue.use(VScrollLock)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(`@/views/HomeView.vue`),
    meta: { layout: "HomeLayout" }
  },
  {
    path: '/reel',
    name: 'reel',
    component: () => import(`@/views/ReelView.vue`),
    meta: { 
      layout: "HomeLayout",
      requiresAuth: true
    }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import(`@/views/WorkView.vue`),
    meta: { layout: "HomeLayout" }
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import(`@/views/ResumeView.vue`),
    meta: { layout: "HomeLayout" }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
