import Vue from 'vue'
import VueRouter from 'vue-router'
import VScrollLock from 'v-scroll-lock'

Vue.use(VueRouter)
Vue.use(VScrollLock)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(`@/views/HomeView.vue`)
  },
  {
    path: '/reel',
    name: 'reel',
    component: () => import(`@/views/ReelView.vue`)
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import(`@/views/ResumeView.vue`)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
	return { x: 0, y: 0 }
  }
})

export default router
