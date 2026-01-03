<template>
  <section class="md:w-2/3 flex flex-col p-12 items-center">
    <!-- Inputs -->
    <div class="flex flex-col">
      <label
        class="flex text-gray-800 mb-2"
        for="name"
      >Name </label>
      <input
        id="name"
        v-model="name"
        type="text"
        name="name"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      >
    </div>

    <div class="flex flex-col mt-2">
      <label
        class="flex text-gray-800 mb-2"
        for="occupation"
      >Occupation</label>
      <input
        id="occupation"
        v-model="occupation"
        type="text"
        name="occupation"
        class="border-2 border-solid border-blue-200 rounded px-2 py-1"
      >
    </div>

    <div class="flex flex-row mt-12">
      <button
        class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        type="submit"
        @click="submitForm()"
      >
        Submit
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["submit"]);

const name = ref("");
const occupation = ref("");

function submitForm() {
  emit("submit", {
    name: this.name,
    occupation: this.occupation,
  });
}
</script>
