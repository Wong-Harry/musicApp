<template>
  <div class="tabList">
    <a-menu v-model="current" mode="horizontal" @click="goItem">
      <a-menu-item key="recommend">
        <a-icon type="mail"/>推荐
      </a-menu-item>
      <a-menu-item key="singer">
        <a-icon type="android"/>歌手
      </a-menu-item>
      <a-menu-item key="musicList">
        <a-icon type="android"/>歌单
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return { current: ["recommend"] };
  },
  methods: {
    goItem(item, key, keyPath) {
      if (item.key == "recommend") {
        this.$router.push("/recommend");
      } else if (item.key == "singer") {
        this.$router.push("/singer");
      } else {
        this.$router.push("/musicList");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabList {
  .item {
    .ant-tabs-top-bar {
      margin: 0 !important;
    }
  }
}
</style>
