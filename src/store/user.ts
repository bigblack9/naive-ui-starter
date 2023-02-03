/*
 * @Author: black9 lcl904624834@live.com
 * @Date: 2023-02-02 17:07:26
 * @LastEditors: black9 lcl904624834@live.com
 * @LastEditTime: 2023-02-02 17:11:21
 * @FilePath: /naive-ui-template/src/store/user.ts
 */
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
