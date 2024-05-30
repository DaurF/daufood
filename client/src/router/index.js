import {createRouter, createWebHistory} from 'vue-router'
import TheHome from "@/pages/TheHome.vue";
import TheLogin from "@/pages/TheLogin.vue";
import TheSignup from "@/pages/TheSignup.vue";
import TheOrder from "@/pages/TheOrder.vue";
import OrderCreated from "@/pages/OrderCreated.vue";
import TheOrders from "@/pages/TheOrders.vue";
import TheAdmin from "@/components/TheAdmin.vue";

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
    },
    {
      path: '/order',
      name: 'order',
      component: TheOrder
    },
    {
      path: '/order-created/:orderId',
      name: 'orderCreated',
      component: OrderCreated
    },
    {
      path: '/orders',
      name: 'orders',
      component: TheOrders
    },
    {
      path: '/admin',
      name: 'admin',
      component: TheAdmin
    }
  ]
})

export default router
