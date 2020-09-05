import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Alertas',
    name: 'Alertas',
    component: () => import('../views/Alert.vue')
  },
  {
    path: '/AspectRatios',
    name: 'AspectRatios',
    component: () => import('../views/AspectRatios.vue')
  },
  {
    path: '/Avatar',
    name: 'Avatar',
    component: () => import('../views/Avatar.vue')
  },
  {
    path: '/Badge',
    name: 'Badge',
    component: () => import('../views/Badge.vue')
  },
  {
    path: '/Banners',
    name: 'Banners',
    component: () => import('../views/Banners.vue')
  },
  {
    path: '/AppBars',
    name: 'AppBars',
    component: () => import('../views/AppBars.vue')
  },
  {
    path: '/Toolbars',
    name: 'Toolbars',
    component: () => import('../views/Toolbars.vue')
  },
  {
    path: '/Systembars',
    name: 'Systembars',
    component: () => import('../views/Systembars.vue')
  },
  {
    path: '/Bottomnavigation',
    name: 'Bottomnavigation',
    component: () => import('../views/Bottomnavigation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
