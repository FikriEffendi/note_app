import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageLogin from '@/views/auth/login/page-login.vue'
import PageRegister from '@/views/auth/register/page-register.vue'
import LayoutAuth from '@/layouts/auth/layout-auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: LayoutAuth,
      children: [
        {
          path: '/login',
          name: 'login',
          component: PageLogin,
        },
        {
          path: '/register',
          name: 'register',
          component: PageRegister,
        },
      ],
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
