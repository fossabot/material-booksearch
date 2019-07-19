import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { topBar: false },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  },
];

const router = new Router({ mode: 'history', routes });

export default router;
