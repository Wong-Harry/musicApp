<template>
  <div class="list">
    <div class="item" v-for="(item, index) in hotListData" :key="index">
      <div class="titleImg">
        <img :src="item.coverImgUrl">
      </div>
      <div class="content">
        <p>{{item.name}}</p>
        <ul>
          <li v-for="(items, indexs) in item.racks" :key="indexs">
            <span class="songTitle">{{items.first}}</span>
            <span class="nums">-{{items.second}}</span>
          </li>
          <li>1212</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotListData: []
    };
  },
  methods: {
    getHotList() {
      this.$axios
        .get("http://203.195.175.50:3000/toplist/detail")
        .then(data => {
          if (data.status == 200) {
            this.hotListData = data.data.list;
            console.log( this.hotListData);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getHotList();
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding: 1.6rem;
  background-color: #f4f4f4;
  height: 100%;
  .item {
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 10rem;
    .titleImg {
      width: 10rem;
      img {
        width: 100%;
      }
    }
    .content {
      background-color: #fff;
      color: #000;
    }
  }
}
</style>

