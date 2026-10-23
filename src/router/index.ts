import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  { path: '/', component: App },
  { path: '/resume', component: () => import('../components/ResumePage.vue') }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
