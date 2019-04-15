<template>
  <div class="tabList">
    <a-row>
      <a-col span="8" class="item">
        <a-icon type="copy"/>
        <span>推荐</span>
      </a-col>
      <a-col span="8" class="item">
        <a-icon type="edit"/>
        <span>歌手</span>
      </a-col>
      <a-col span="8" class="item">
        <a-icon type="mail"/>
        <span>歌单</span>
      </a-col>
    </a-row>
  </div>
</template>


<script>
export default {
  name: "tabList",
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabList {
  background-color: #00b3ff;
  color: #fff;
  font-size: 1.4rem;
  padding: 1rem 0;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    span{
      margin-left: .5rem;
    }
  }
}
</style>
