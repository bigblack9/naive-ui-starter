<template>
  <n-card title="Naive UI Template">
    <n-space>
      <n-button @click="updateTheme(true)">深色</n-button>
      <n-button @click="updateTheme(false)">浅色</n-button>
    </n-space>
  </n-card>
</template>
<script lang="ts" setup>
import { NCard, NSpace } from 'naive-ui';

import { useThemeStore } from '@/store/theme';
const themeStore = useThemeStore();

const updateTheme = (isDark: boolean) => {
  themeStore.setThemeMode(isDark);
};
</script>
<style></style>
