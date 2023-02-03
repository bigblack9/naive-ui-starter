import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // id unique
  state: () => {
    return {
      name: '',
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
