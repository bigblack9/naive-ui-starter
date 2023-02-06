import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import 'vfonts/Lato.css';
import 'nprogress/nprogress.css';

import { create, NButton } from 'naive-ui';

import '@/assets/styles/index.scss';

const naive = create({
  components: [NButton],
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(naive);

app.mount('#app');
