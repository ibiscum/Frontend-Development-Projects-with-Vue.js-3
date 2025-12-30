<template>
  <div>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
const { content } = defineProps({
  content: {
    default: "",
    type: String,
  },
});
</script>
