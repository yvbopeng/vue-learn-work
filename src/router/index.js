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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/env-view',
      name: 'EnvView',
      component: () => import('../views/EnvView.vue')
    },
    {
      path: '/draggable-plus',
      name: 'DraggablePlus',
      component: () => import('../views/DraggablePlus.vue')
    },
    {
      path: '/draggable-plus-table',
      name: 'DraggablePlusTable',
      component: () => import('../views/DragPlusTable.vue')
    },
    {
      path: '/three-test',
      name: 'ThreeTest',
      component: () => import('../views/ThreeView.vue')
    },
    {
      path: '/poetry',
      name: 'poetry',
      component: () => import('../views/PoetryView.vue')
    },
  ]
})

export default router
