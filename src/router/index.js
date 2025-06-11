import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'default' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/episodes',
      component: () => import('../views/EpisodesPage.vue'),
      props: true,
    },
    {
      path: '/episodes/:id',
      component: () => import('../views/PodcastPage.vue'),
      props: true,
    },
  ],
})

export default router
