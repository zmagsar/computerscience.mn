import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/about/', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/admissions/', name: 'admissions', component: () => import('../views/AdmissionsView.vue') },
  { path: '/programs/', name: 'programs', component: () => import('../views/ProgramsView.vue') },
  { path: '/hourofcode/', name: 'hourofcode', component: () => import('../views/HourOfCodeView.vue') },
  { path: '/courses/cs0/', name: 'course-cs0', component: () => import('../views/courses/CS0View.vue') },
  { path: '/courses/cs1a/', name: 'course-cs1a', component: () => import('../views/courses/CS1aView.vue') },
  { path: '/courses/csp/', name: 'course-csp', component: () => import('../views/courses/CSPView.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
