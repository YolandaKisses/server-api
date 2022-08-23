<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
import API from "./utils/api";
export default {
  name: "App",
  async created() {
    try {
      const res = await API.getBatchData();
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  },
  async mounted() {
    try {
      const res = await API.getGroupData({ fundType: "GJ", _userId: 1 });
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }
};
</script>

<style>
</style>
