import { createRouter, createWebHistory } from 'vue-router'
import PrimeVueDemos from '../pages/primeVue/PrimeVueDemos.vue';
import CustomDemos from '../pages/custom/components/CustomDemos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PrimeVueDemos,
    },
    {
      path: '/custom',
      name: 'about',
      component: CustomDemos,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    return savedPosition || { top: 0 };
  },
})

export const RouteNames = {
  HOME: 'home',
  CUSTOM: 'custom',
};

export default router
