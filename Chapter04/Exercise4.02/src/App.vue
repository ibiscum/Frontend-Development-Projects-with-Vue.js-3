<script>
import Greeting from "./components/Greeting.vue";
export default {
  components: {
    Greeting,
  },
  data() {
    return {
      greeting: "Hello",
      who: "Vue.js",
    };
  },
};
</script>

<template>
  <div id="app">
    <input
      v-model="who"
      placeholder="What is your name"
    >
    <Greeting
      greeting="Hi"
      :who="who"
    />
  </div>
</template>
