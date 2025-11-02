<template>
  <div>{{ greeting }} {{ who }}</div>
</template>
<script>
export default {
  props: {
    greeting: { type: String, default: "greeting" },
    who: { type: String, default: "who" },
  },
};
</script>
