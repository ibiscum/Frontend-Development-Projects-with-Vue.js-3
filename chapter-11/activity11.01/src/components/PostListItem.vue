<script setup>
import { computed } from "vue";

const props = defineProps({
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
  slug: {
    type: String,
    default: "",
  },
});

const truncated = computed(() => {
  return props.description && props.description.slice(0, 8);
});

const ellipsis = computed(() => {
  return props.description && props.description.length > 50
    ? `${props.description.slice(0, 50)}...`
    : props.description;
});

defineExpose({ truncated, ellipsis });
</script>

<template>
  <div>
    <router-link :to="`/${slug}`">
      <h3>{{ title }}</h3>
    </router-link>
    <p>
      {{ ellipsis }}
    </p>

    <router-link v-for="tag in tags" :key="tag" :to="`/tags/${tag}`">
      #{{ tag }}
    </router-link>
  </div>
</template>
