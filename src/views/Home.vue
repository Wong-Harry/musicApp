<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <navBar/>
    <tabList/>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/navBar";
import tabList from "@/components/tabList";

export default {
  name: "home",
  components: {
    navBar,
    tabList
  }
};
</script>
