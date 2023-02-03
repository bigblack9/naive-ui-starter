/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-02 16:42:42
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 15:59:29
 * @FilePath: /naive-ui-template/src/main.ts
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';

import 'vfonts/Lato.css';

import { create, NButton } from 'naive-ui';

const naive = create({
  components: [NButton],
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(naive);

app.mount('#app');
