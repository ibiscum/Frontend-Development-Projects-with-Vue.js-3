<template>
  <section class="md:w-1/3 flex flex-col p-12">
    <!-- Profile Card -->
    <h3 class="font-bold font-lg">
      {{ store.name }}
    </h3>
    <p class="mt-2">
      {{ store.occupation }}
      <span v-if="store.organization"> at {{ store.organization }} </span>
    </p>
    <p
      v-if="store.email"
      class="mt-2"
    >
      Email: {{ store.email }}
    </p>
    <p
      v-if="store.phonenumber"
      class="mt-2"
    >
      Phone Number: {{ store.phonenumber }}
    </p>
  </section>
</template>

<script setup>
import { store } from "@/store.js";
</script>
