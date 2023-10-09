import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  extendRoutes: (routes) => {
    const result = setupLayouts(routes)
    return result
  },
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
