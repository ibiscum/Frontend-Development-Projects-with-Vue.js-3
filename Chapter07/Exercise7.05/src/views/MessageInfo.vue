<template>
  <div>
    <h3>Message info:</h3>
    <p>{{ message.sent }}</p>
  </div>
</template>

<script setup>
const { message } = defineProps({
  id: {
    default: "",
    type: String,
  },
  message: {
    default: () => ({ sent: "" }),
    type: Object,
  },
});
</script>
