/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-03 16:36:47
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-03 16:49:00
 * @FilePath: /naive-ui-template/src/store/theme.ts
 */
import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => {
    return {
      isDark: false,
    };
  },

  actions: {
    setThemeMode(isDark: boolean) {
      this.isDark = isDark;
    },
  },
});
