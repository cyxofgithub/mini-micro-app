import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/page1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/page1'
  },
  {
    path: '/react17/*',
    name: 'react17',
    component: Home,
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "page2" */ './pages/page2.vue'),
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import(/* webpackChunkName: "page1" */ './pages/page1.vue'),
  },
];

export default routes;
