import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // если пользователь нажал "назад", вернуть сохранённую позицию
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
      name: 'episodes',
      component: () => import('../views/EpisodesPage.vue'),
    },
    {
      path: '/episodes/:id',
      component: () => import('../views/PodcastPage.vue'),
      props: true,
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogPage.vue'),
    },
    {
      path: '/blogs/:id',
      component: () => import('../views/SingleBlog.vue'),
      props: true,
    },
  ],
})

export default router
