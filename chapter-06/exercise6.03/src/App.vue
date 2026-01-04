<script setup>
import Rich from "./components/RichComp.vue";
import Compressed from "./components/CompressedComp.vue";
import List from "./components/ListComp.vue";
import { shallowRef } from "vue";

const layout = shallowRef(Rich);
const layoutOptions = [
  {
    name: "Rich",
    component: Rich,
  },
  {
    name: "List",
    component: List,
  },
  {
    name: "Compressed",
    component: Compressed,
  },
];
const items = [
  {
    id: "10",
    title: "Forest Shot",
    description: "Recent shot of a forest overlooking a lake",
    url: "https://picsum.photos/id/10/1000/750.jpg",
  },
  {
    id: "1000",
    title: "Cold cross",
    description: "Mountaintop cross with snowfall from Jan 2018",
    url: "https://picsum.photos/id/1000/1000/750.jpg",
  },
];
</script>

<template>
  <div id="app">
    Layout:
    <select v-model="layout">
      <option
        v-for="(option, index) in layoutOptions"
        :key="index"
        :value="option.component"
      >
        {{ option.name }}
      </option>
    </select>
    <div
      class="grid"
      :class="{ 'grid-column': layout === List }"
    >
      <component
        :is="layout"
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
}
.grid-column {
  flex-direction: column;
}
</style>
