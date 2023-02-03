<script setup lang="ts">
import { computed } from 'vue';

import { NConfigProvider, darkTheme } from 'naive-ui';

import { useThemeStore } from '@/store/theme';

const themeStore = useThemeStore();

const theme = computed(() => {
  return themeStore.isDark ? darkTheme : null;
});
</script>

<template>
  <n-config-provider :theme="theme">
    <RouterView />
  </n-config-provider>
</template>

<style scoped></style>
