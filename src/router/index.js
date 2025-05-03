
import { createRouter, createWebHistory } from 'vue-router'


import PageSite1  from '@/Pages/PageSite1.vue'
import PageSite2  from '@/Pages/PageSite2.vue'
import PageSite3  from '@/Pages/PageSite3.vue'
import PageSite4  from '@/Pages/PageSite4.vue'
import PageSite5  from '@/Pages/PageSite5.vue'
import PageSite6  from '@/Pages/PageSite6.vue'
import PageSite7  from '@/Pages/PageSite7.vue'
import PageSite8  from '@/Pages/PageSite8.vue'
import PageSite9  from '@/Pages/PageSite9.vue'
import PageSite10 from '@/Pages/PageSite10.vue'
import PageSite11 from '@/Pages/PageSite11.vue'
import PageSite12 from '@/Pages/PageSite12.vue'
import PageSite13 from '@/Pages/PageSite13.vue'
import PageSite14 from '@/Pages/PageSite14.vue'
import PageSite15 from '@/Pages/PageSite15.vue'
import PageSite16 from '@/Pages/PageSite16.vue'


const routes = [
  { path: '/', redirect: '/pages/PageSite1' },
  { path: '/pages/PageSite1',  name: 'PageSite1',  component: PageSite1 },
  { path: '/pages/PageSite2',  name: 'PageSite2',  component: PageSite2 },
  { path: '/pages/PageSite3',  name: 'PageSite3',  component: PageSite3 },
  { path: '/pages/PageSite4',  name: 'PageSite4',  component: PageSite4 },
  { path: '/pages/PageSite5',  name: 'PageSite5',  component: PageSite5 },
  { path: '/pages/PageSite6',  name: 'PageSite6',  component: PageSite6 },
  { path: '/pages/PageSite7',  name: 'PageSite7',  component: PageSite7 },
  { path: '/pages/PageSite8',  name: 'PageSite8',  component: PageSite8 },
  { path: '/pages/PageSite9',  name: 'PageSite9',  component: PageSite9 },
  { path: '/pages/PageSite10', name: 'PageSite10', component: PageSite10 },
  { path: '/pages/PageSite11', name: 'PageSite11', component: PageSite11 },
  { path: '/pages/PageSite12', name: 'PageSite12', component: PageSite12 },
  { path: '/pages/PageSite13', name: 'PageSite13', component: PageSite13 },
  { path: '/pages/PageSite14', name: 'PageSite14', component: PageSite14 },
  { path: '/pages/PageSite15', name: 'PageSite15', component: PageSite15 },
  { path: '/pages/PageSite16', name: 'PageSite16', component: PageSite16 },
  { path: '/:pathMatch(.*)*', redirect: '/pages/PageSite1' }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
