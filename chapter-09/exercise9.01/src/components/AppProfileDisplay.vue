<template>
  <section class="md:w-1/3 flex flex-col p-12">
    <!-- Profile Card -->
    <h3 class="font-bold font-lg">
      {{ props.formData.name }}
    </h3>
    <p class="mt-2">
      {{ props.formData.occupation }}
    </p>
  </section>
</template>

<script setup>
const props = defineProps({ formData: { type: Object, default: () => ({ name: "", occupation: "" }) } });
</script>
