/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-02 17:12:19
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 16:04:52
 * @FilePath: /naive-ui-template/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/Index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
