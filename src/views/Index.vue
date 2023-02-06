<template>
  <div class="container">
    <h1>Hello, Welcome to naive-ui-starter</h1>
    <template v-for="feature in featureList" :key="feature.name">
      <a :href="feature.href" target="_blank">{{ feature.name }}</a>
      <NDivider v-if="!feature.isEnd" vertical />
    </template>
    <p>Before coding, I recommended your IDE setup VSCode + Volar</p>
    <NSpace justify="center">
      <NIcon v-if="!themeStore.isDark" size="30" @click="updateTheme()">
        <SunnyOutline />
      </NIcon>
      <NIcon v-else size="30" @click="updateTheme()">
        <CloudyNightOutline />
      </NIcon>
      <NIcon size="30">
        <LogoGithub />
      </NIcon>
    </NSpace>
  </div>
</template>
<script lang="ts" setup>
import { NSpace, NDivider, NIcon } from 'naive-ui';
import { LogoGithub, SunnyOutline, CloudyNightOutline } from '@vicons/ionicons5';
import { useDark, useToggle } from '@vueuse/core';

import { useThemeStore } from '@/store/theme';
const themeStore = useThemeStore();

const updateTheme = () => {
  const isDark = useDark();
  useToggle(isDark)();
  themeStore.setThemeMode(isDark.value);
};

const featureList = [
  {
    name: 'Vite4',
    href: 'https://github.com/vitejs/vite',
  },
  {
    name: 'Vue3',
    href: 'https://github.com/vuejs/core',
  },
  {
    name: 'Typescript',
    href: 'https://github.com/microsoft/TypeScript',
  },
  {
    name: 'Naive UI',
    href: 'https://github.com/tusen-ai/naive-ui',
  },
  {
    name: 'Vue Router 4',
    href: 'https://router.vuejs.org/',
  },
  {
    name: 'Pinia',
    href: 'https://pinia.vuejs.org',
  },
  {
    name: 'Xicons',
    href: 'https://xicons.org/#/',
  },
  {
    name: 'Prettier',
    href: 'https://github.com/prettier/prettier',
  },
  {
    name: 'ESLint',
    href: 'https://github.com/eslint/eslint',
  },
  {
    name: 'Husky',
    href: 'https://github.com/typicode/husky',
  },
  {
    name: 'Commitizen',
    href: 'https://github.com/commitizen/cz-cli',
  },
  {
    name: 'NProgress',
    href: 'https://github.com/rstacruz/nprogress',
  },
  {
    name: 'VueUse',
    href: 'https://github.com/vueuse/vueuse',
    isEnd: true,
  },
];
</script>
<style lang="scss" scoped>
.container {
  h1 {
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
