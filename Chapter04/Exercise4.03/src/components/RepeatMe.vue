<template>
  <div>
    <span
      v-for="r in repetitions"
      :key="r"
    >
      {{ config.content }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Function,
      validator(value) {
        return (
          typeof value.times === "number" && typeof value.content === "string"
        );
      },
      default: () => 1,
    },
  },
  computed: {
    repetitions() {
      return Array.from({ length: this.config.times });
    },
  },
};
</script>
