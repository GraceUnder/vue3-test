import { createRouter, createWebHistory } from 'vue-router'
import { constantRouter } from './router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouter
})
// console.log(import.meta)
export default router
