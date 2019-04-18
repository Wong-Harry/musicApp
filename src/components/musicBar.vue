<template>
  <div class="musicBar" @click="openPlayer">
    <div class="imgBox">
      <img src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg">
      <div>
        <p>绿色</p>
        <span>陈雪凝</span>
      </div>
    </div>
    <div class="btns">
      <a-icon type="play-circle" @click="playMusci"/>
      <a-icon type="menu-unfold" @click="openList"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'musicBar',
  data () {
    return {}
  },
  methods: {
    openPlayer () {
      this.$router.push('/player')
    },
    playMusci (e) {
      console.log(e);
      e.stopPropagation();

    },
    openList (e) {
      e.stopPropagation();
      console.log(e);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.musicBar {
  height: 5rem;
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid #f0f0f0;
  .imgBox {
    padding: 0 1rem;
    width: 12rem;
    display: flex;
    align-items: center;
    img {
      height: 3.6rem;
      width: 3.6rem;
      border-radius: 50%;
    }
    div {
      margin-left: 1rem;
      font-size: 1.2rem;
      color: rgb(134, 134, 134);
      p {
        color: #333;
      }
    }
  }
  .btns {
    padding: 0 1rem;
    display: flex;
    align-items: center;
      height: 100%;
    font-size: 2.2rem;
    i {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 1rem;
    }
  }
}
</style>
