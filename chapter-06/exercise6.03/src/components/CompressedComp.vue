<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const { title, description } = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  min-width: 200px;
}
h3 {
  font-weight: normal;
  padding-bottom: 0;
}
p {
  margin: 0;
}
</style>
