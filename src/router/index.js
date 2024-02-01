import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeViewVue from '@/views/RecipeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: RecipeViewVue
    },
    {
      path: '/recipe/:id',
      name: 'single-recipe',
      component: RecipeViewVue
    },
    {
      path: '/browse',
      name: 'browse',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: HomeView
    }
  ]
})

export default router
