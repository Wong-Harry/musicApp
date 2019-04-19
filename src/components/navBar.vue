<template>
  <a-row class="navBar">
    <a-col span="20" class="header_input">musicApp</a-col>
    <a-col span="4" class="header_right">
      <div @click="goSearch">
        <a-icon type="search" class="search_icon"/>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'navBar',
  methods: {
    goSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navBar {
  background-color: #1890ff;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  height: 4.4rem;
  .header_left,
  .header_right,
  .header_input {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search_icon {
    font-size: 2rem;
  }
}
</style>
