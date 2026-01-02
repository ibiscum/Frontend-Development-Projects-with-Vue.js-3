<script setup>
import { useColorStore } from "@/stores/color.js";
const store = useColorStore();
</script>

<template>
  <div>
    <h2>Edit RGB</h2>
    <label for="red">Red</label>
    <input id="red" v-model="store.red" type="range" min="0" max="255"><br>
    <label for="green">Green</label>
    <input id="green" v-model="store.green" type="range" min="0" max="255"><br>
    <label for="blue">Blue</label>
    <input id="blue" v-model="store.blue" type="range" min="0" max="255"><br>
  </div>
</template>

<style>
label {
  display: inline-block;
  width: 50px;
}
</style>
