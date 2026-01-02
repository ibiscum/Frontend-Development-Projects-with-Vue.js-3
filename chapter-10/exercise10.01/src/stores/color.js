import { defineStore } from 'pinia';

export const useColorStore = defineStore('color', {
state: () => ({
    red: 0,
    blue: 0,
    green: 0,
  }),
});
