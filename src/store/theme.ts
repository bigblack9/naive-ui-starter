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
