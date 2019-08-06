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
    path: '/book/:bookId',
    name: 'book',
    component: () => import(/* webpackChunkName: "book" */ '@/views/Book.vue'),
  },
];

const router = new Router({ mode: 'history', routes });

export default router;
