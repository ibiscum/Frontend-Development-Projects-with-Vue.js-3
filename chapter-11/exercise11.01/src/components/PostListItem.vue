<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>

    <ul>
      <li
        v-for="tag in tags"
        :key="tag"
      >
        #{{ tag }}
      </li>
    </ul>
  </div>
</template>
