<template>
  <div class="home">
    <nav-Bar/>
    <tab-List/>

    <router-view></router-view>
    <music-Bar/>
  </div>
</template>

<script>
// @ is an alias to /src

import navBar from '@/components/navBar'
import tabList from '@/components/tabList'
export default {
  name: 'home',
  components: { tabList, navBar },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 0 0 5rem 0;
}
</style>

