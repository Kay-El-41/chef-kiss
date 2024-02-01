import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeViewVue from '@/views/RecipeView.vue'
import BrowseView from '@/views/BrowseView.vue'
import ErrorView from '@/views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
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
      component: BrowseView,
      children: [
        {
          path: 'all-recipes',
          name: 'recipes',
          component: BrowseView
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: ErrorView
    }
  ]
})

export default router
