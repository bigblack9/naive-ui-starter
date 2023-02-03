<!--
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-02 16:42:42
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 16:46:40
 * @FilePath: /naive-ui-template/src/App.vue
-->
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
