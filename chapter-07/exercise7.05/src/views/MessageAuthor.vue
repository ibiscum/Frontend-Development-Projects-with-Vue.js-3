<template>
  <h3>Author:</h3>
  <p>{{ message.author }}</p>
</template>

<script setup>
const { message } = defineProps({
  id: {
    default: "",
    type: String,
  },
  message: {
    default: () => ({ author: "" }),
    type: Object,
  },
});
</script>
