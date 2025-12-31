<template>
  <div class="container">
    <h1>Methods vs watchers vs computed props</h1>

    <div class="col">
      <input
        v-model="input"
        type="text"
        placeholder="Search with method"
        @keyup="searchMethod"
      >

      <ul>
        <li
          v-for="(item, i) in methodFilterList"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="col">
      <input
        v-model="input2"
        type="text"
        placeholder="Search with computed"
      >

      <ul>
        <li
          v-for="(item, i) in computedList"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="col">
      <input
        v-model="input3"
        type="text"
        placeholder="Search with watcher"
      >

      <ul>
        <li
          v-for="(item, i) in watchFilterList"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Shared
      frameworkList: [
        "Vue",
        "React",
        "Backbone",
        "Ember",
        "Knockout",
        "jQuery",
        "Angular",
      ],

      // Method
      input: "",
      methodFilterList: [],
      // Computed
      input2: "",
      // Watcher
      input3: "",
      watchFilterList: [],
    };
  },
  computed: {
    computedList() {
      return this.frameworkList.filter((item) => {
        return item.toLowerCase().includes(this.input2.toLowerCase());
      });
    },
  },
  watch: {
    input3: {
      handler() {
        this.watchFilterList = this.frameworkList.filter((item) =>
          item.toLowerCase().includes(this.input3.toLowerCase()),
        );
      },
      immediate: true,
    },
  },
  created() {
    this.searchMethod();
  },
  methods: {
    searchMethod() {
      this.methodFilterList = this.frameworkList.filter((item) =>
        item.toLowerCase().includes(this.input.toLowerCase()),
      );
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.col {
  width: 33%;
  height: 100%;
  float: left;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>
