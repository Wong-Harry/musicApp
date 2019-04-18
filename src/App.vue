<template>
  <div id="app">
    <!-- <tabList/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    callback (key) {
      console.log(key)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}
</style>
