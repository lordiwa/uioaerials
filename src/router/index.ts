import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'UIO Aerials — Imagen Aérea Inmersiva' },
  },
  {
    path: '/cinematografia-fpv',
    name: 'fpv',
    component: () => import('@/views/FpvView.vue'),
    meta: { title: 'Cinematografía FPV — UIO Aerials' },
  },
  {
    path: '/digitalizacion-3d',
    name: '3d',
    component: () => import('@/views/Digitalizacion3DView.vue'),
    meta: { title: 'Digitalización 3D — UIO Aerials' },
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('@/views/ContactoView.vue'),
    meta: { title: 'Cotizar Vuelo — UIO Aerials' },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to) => {
  document.title = (to.meta.title as string) || 'UIO Aerials'
})

export default router
