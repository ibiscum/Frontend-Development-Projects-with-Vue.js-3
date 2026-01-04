<template>
  <div>
    <!-- <img v-bind:src="logo" /> -->
    <h1
      v-once
      v-text="text"
    />

    <h2 v-show="false" />
    <!--v-html="html" -->
    <a
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />

    <!-- <h1 v-if="false" v-once v-text="text" /> -->
    <!-- <h2 v-else-if="false" v-html="html" /> -->
    <!-- <a
      v-else
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    /> -->
  </div>
</template>

<script setup>
// import logo from "../assets/logo.svg";
const text = 'Directive text';
// const html = 'Stylise</br>HTML in<br/><b>your data</b>';
const link = {
  title: "Go to Google",
  url: "https://google.com",
  tabindex: 1,
  target: '_blank'
};
</script>

<style scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}

a {
  display: block;
  margin-top: 40px;
}
</style>
