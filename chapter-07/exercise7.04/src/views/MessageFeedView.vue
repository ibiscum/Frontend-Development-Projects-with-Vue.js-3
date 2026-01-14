<template>
  <div>
    <h2>Message Feed</h2>
    <div
      v-for="(m, i) in messages"
      :key="i"
    >
      <RouterLink :to="`/message/${i}`">
        {{ m }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
const { messages } = defineProps({
  messages: {
    default() { return [] },
    type: Array,
  },
});
</script>
