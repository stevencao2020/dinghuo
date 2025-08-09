import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/',        name: 'home',     component: () => import('../views/Home.vue') },
  { path: '/trend',   name: 'trend',    component: () => import('../views/Trend.vue') },
  { path: '/profile', name: 'profile',  component: () => import('../views/Profile.vue') },
  { path: '/calendar',name: 'calendar', component: () => import('../views/Calendar.vue') },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});