<!--
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-02 17:16:57
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 17:54:00
 * @FilePath: /naive-ui-template/src/views/Index.vue
-->
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
