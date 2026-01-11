import { defineStore } from "pinia";

export const userPreferencesStore = defineStore('userPreferences', {
  state: () => ({
    dismissedSubscriberBanner: false,
    acceptedCookie: false,
  }),
  getters: {},
  actions: {
    dismissSubscriberBanner() {
      this.dismissedSubscriberBanner = true;
    },
    acceptCookie() {
      this.acceptedCookie = true;
    },
  },
});
