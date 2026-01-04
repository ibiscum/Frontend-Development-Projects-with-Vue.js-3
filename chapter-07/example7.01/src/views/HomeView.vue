<script>
import TheWelcome from "@/components/TheWelcome.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
  name: "HomeView",
  components: {
    TheWelcome,
  },
  props: {
    currentLayout: {
      type: Object,
      default: () => DefaultLayout,
    }
  },
  emits: ["update:currentLayout"],
  created() {
    this.$emit("update:currentLayout", DefaultLayout);
  },
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
