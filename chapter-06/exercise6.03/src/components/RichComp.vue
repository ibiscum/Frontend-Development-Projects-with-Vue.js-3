<template>
  <div class="card">
    <img
      :src="srcUrl"
      width="200"
    >
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(
  {
    srcUrl: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    }
  }
);
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
}

h3 {
  font-weight: normal;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
