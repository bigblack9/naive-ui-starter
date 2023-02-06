import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/403',
    name: 'NotAuthentication',
    meta: {
      title: '403',
    },
    component: () => import('@/views/pages/403.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    meta: {
      title: '404',
    },
    component: () => import('@/views/pages/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(to, from);
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  console.log(to, from);
  NProgress.done();
});

export default router;
