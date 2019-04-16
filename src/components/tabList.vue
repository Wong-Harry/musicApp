<template>
  <div class="tabList">
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="android"/>推荐
        </span>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="android"/>歌手
        </span>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">
          <a-icon type="android"/>歌单
        </span>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    callback(key) {
      if (key == 1) {
        this.$router.push("/recommend");
      } else if (key == 2) {
        this.$router.push("/singer");
      } else {
        this.$router.push("/musicList");
      }
      // console.log(key);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabList {
  // background-color: #00b3ff;
  color: #fff;
  font-size: 1.4rem;
  // padding: 1rem 0;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    span {
      margin-left: 0.5rem;
    }
  }
}
</style>
