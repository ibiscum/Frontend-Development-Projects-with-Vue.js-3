<template>
  <div>
    <button
      v-if="!showEditor"
      @click="showEditor = !showEditor"
    >
      Add new blog
    </button>
    <BlogEditor
      v-else
      @add-new-item="addItem"
    />
    <BlogsComp
      :blogs="blogs"
      :is-loading="isLoading"
      :error="error"
      @delete-blog="deleteItem"
    />
  </div>
</template>
<script setup>
import BlogEditor from "./BlogEditor.vue";
import BlogsComp from "./BlogsComp.vue";
import { useBlogs } from "../composables/useBlogs";
import { ref } from "vue";

const { blogs, isLoading, error, addItem, deleteItem } = useBlogs();
const showEditor = ref(false);
</script>
