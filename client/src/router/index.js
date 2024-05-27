import {createRouter, createWebHistory} from 'vue-router'
import TheHome from "@/pages/TheHome.vue";
import TheLogin from "@/pages/TheLogin.vue";
import TheSignup from "@/pages/TheSignup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/login',
      name: 'login',
      component: TheLogin
    },
    {
      path: '/signup',
      name: 'signup',
      component: TheSignup
    }
  ]
})

export default router
