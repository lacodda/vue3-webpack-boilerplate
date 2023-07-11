import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: async () => await import('./components/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: async () => await import('./components/About.vue'),
    },
    {
      path: '/info',
      name: 'Info',
      component: async () => await import('./components/Info.vue'),
    },
  ],
});

export default router;
