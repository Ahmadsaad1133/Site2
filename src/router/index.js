import { createRouter, createWebHistory } from 'vue-router'
import PageSite16 from '@/Pages/PageSite16.vue'

const routes = [
  {
    path: '/PageSite16',
    name: 'PageSite16',
    component: PageSite16
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
