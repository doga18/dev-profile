import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/resume', component: () => import('../components/ResumePage.vue') }
]


export const router = createRouter({
  history: createWebHistory(),
  routes
})
