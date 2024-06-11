import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/menu.vue')
    },
    {
      path: '/story1',
      name: 'story1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/story1.vue')
    },
    {
      path: '/story2',
      name: 'story2',
      component: () => import('../views/story2.vue')
    },
    {
      path: '/story3',
      name: 'story3',
      component: () => import('../views/story3.vue')
    },
    {
      path: '/story4',
      name: 'story4',
      component: () => import('../views/story4.vue')
    },
    {
      path: '/story5',
      name: 'story5',
      component: () => import('../views/story5.vue')
    },
    {
      path: '/story6',
      name: 'story6',
      component: () => import('../views/story6.vue')
    },
    {
      path: '/story7',
      name: 'story7',
      component: () => import('../views/story7.vue')
    }
  ]
})

export default router
