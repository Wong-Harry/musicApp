<template>
  <div class="home">
    <navBar/>
    <tabList/>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

import navBar from "@/components/navBar";
import tabList from "@/components/tabList";
export default {
  name: "home",
  components: { tabList, navBar }
};
</script>
