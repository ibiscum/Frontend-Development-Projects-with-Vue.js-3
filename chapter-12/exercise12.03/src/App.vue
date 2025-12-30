<template>
  <h2>Commentator Pro</h2>

  <button
    data-test-id="new-comment-button"
    @click="showEditor = !showEditor"
  >
    Add a New Comment
  </button>

  <div v-if="showEditor">
    <p>
      <textarea
        v-model="newComment"
        data-test-id="new-comment-editor"
      />
    </p>
    <p>
      <button
        data-test-id="new-comment-submit"
        :disabled="!newComment || isSubmitting"
        :class="{ submitting: isSubmitting }"
        @click="submitNewComment()"
      >
        Submit
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEditor: false,
      newComment: "",
      isSubmitting: false,
    };
  },
  methods: {
    submitNewComment() {
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        this.newComment = "";
      }, 2500);
    },
  },
};
</script>

<style scoped>
.submitting {
  font-style: italic;
}
</style>
