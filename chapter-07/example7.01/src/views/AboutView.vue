<template>
  <div class="”about”">
    <h2>Age: {{ props.age }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  age: {type: Number, default: 0},
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
