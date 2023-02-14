<script setup lang="ts">
import { computed } from 'vue';

import { NConfigProvider, darkTheme } from 'naive-ui';

import themeOverrides from '@/config/theme';

import { useThemeStore } from '@/store/theme';

const themeStore = useThemeStore();

const theme = computed(() => {
  return themeStore.isDark ? darkTheme : null;
});
</script>

<template>
  <NConfigProvider :theme="theme" :theme-overrides="themeOverrides">
    <RouterView />
  </NConfigProvider>
</template>

<style scoped></style>
