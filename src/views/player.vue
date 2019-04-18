<template>
  <div class="player">
    <!-- <h1 @click="goBack">这是播放页面</h1> -->
    <div class="navBar">
      <a-icon type="arrow-left" @click="goBack"/>
      <span>歌单</span>
    </div>
    <div class="playImg">
      <img src="https://p1.music.126.net/oVJmUJ1bPb_9eBOFCKLclQ==/109951163167730852.jpg" alt>
    </div>
    <div class="btns">
      <a-icon type="retweet"/>
      <a-icon type="swap" />
      <a-icon type="step-backward"/>
      <a-icon type="play-circle"/>
      <a-icon type="pause-circle"/>
      <a-icon type="step-forward"/>
      <a-icon type="menu-unfold"/>
    </div>
    <div class="bgImg">
      <div class="blackBg"></div>
      <img src="https://p1.music.126.net/oVJmUJ1bPb_9eBOFCKLclQ==/109951163167730852.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      data: {
        name: "天真有邪",
        picUrl: "https://p1.music.126.net/oVJmUJ1bPb_9eBOFCKLclQ==/109951163167730852.jpg",
        songer: "林宥嘉",
        url: "http://m10.music.126.net/20190418185814/b4a7cb6bceaa795f93d2bba560ae7c66/ymusic/320a/92a4/d0f8/68a414e71d16bd45e1665829791ec569.mp3"
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  height: 100%;
  width: 100%;
  display: flex;
  align-content: space-between;
  position: relative;
  .bgImg {
    position: absolute;
    z-index: -1;
    top: 0;
    filter: blur(5rem);
    .blackBg {
      position: absolute;
      width: 100%;
      height: 1000rem;
      background-color: #000;
      opacity: 0.5;
    }
    img {
      margin-top: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .navBar {
    padding: 0 2rem;
    height: 4.4rem;
    color: #fff;
    text-align: left;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    font-size: 1.8rem;
    span {
      margin-left: 2rem;
    }
  }
  .playImg {
    padding: 0 4rem;
    width: 100%;
    text-align: center;
    margin-top: 55%;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .btns {
    position: fixed;
    bottom: 0;
    font-size: 4rem;
    color: #fff;
  }
}
</style>

