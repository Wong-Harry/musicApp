<template>
  <div class="player">
    <!-- <h1 @click="goBack">这是播放页面</h1> -->
    <div class="navBar">
      <div @click="goBack">
        <a-icon type="arrow-left"/>
        <div class="info">
          <p>{{data.name}}</p>
          <span>{{data.songer}}</span>
        </div>
      </div>
    </div>
    <div class="playImg">
      <img :src="data.picUrl" alt>
    </div>
    <div class="btns">
      <span class="playPrpgress">
        <span class="startTime">{{currentTime}}</span>
        <div class="prpgress">
          <div class="whitePrpgress" :style="{width:prpgress+'%'}"></div>
          <div
            class="btn"
            :style="{left:prpgress+'%'}"
            @touchstart="fastSeek($event)"
            @touchmove="fastSeek($event)"
            @touchend="fastSeek($event)"
          ></div>
        </div>
        <span class="endTime">{{data.endTime}}</span>
      </span>
      <div class="playBtns">
        <a-icon type="retweet"/>
        <!-- <a-icon type="swap"/> -->
        <a-icon type="step-backward"/>
        <a-icon type="pause-circle" v-if="iconIsplay=='play'" @click="isplay('pause')"/>
        <a-icon type="play-circle" v-if="iconIsplay=='pause'" @click="isplay('play')"/>
        <a-icon type="step-forward"/>
        <a-icon type="menu-unfold"/>
      </div>
    </div>
    <div class="bgImg">
      <div class="blackBg"></div>
      <img :src="data.picUrl">
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      data: {
        id: 1345848098,
        name: '绿色',
        picUrl: 'https://p2.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg',
        songer: '陈雪凝',
        url: 'https://music.163.com/song/media/outer/url?id=1345848098.mp3',
        spareUrl: 'http://m10.music.126.net/20190419161328/fc21c3d2536d5a12e445039422d3f384/ymusic/76b4/dcbb/0a65/9198b18815ee8ce42ae368ae29276f78.mp3',
        endTime: '4:30'
      },
      calculagraph: '',
      iconIsplay: 'play',
      // 
      currentTime: '00:00',
      prpgress: '0'
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    // 播放按钮
    isplay (state) {
      this.$eventBus.$emit('isplay', state)
      state == 'play' ? this.iconIsplay = 'play' : this.iconIsplay = 'pause'
    },
    // 拖动
    fastSeek (e) {
      console.log(e);

    }
  },
  beforeMount () {
    // 页面加载前发送事件获取当前歌曲信息
    this.$eventBus.$emit('getMusicState', 'open')
    // 接收当前播放歌曲的信息
    this.$eventBus.$on('playInfo', (data) => {
      this.data = data
    })
    // 接收当前播放歌曲的已播放的时间
    this.$eventBus.$on('currentTime', (data) => {
      this.currentTime = data.showTime
      this.prpgress = (parseInt(data.returnTime) / parseInt(this.data.returnTime)) * 100
    })
  },
  mounted () {
  },
  beforeDestroy () {
    this.$eventBus.$off('currentTime')
    this.$eventBus.$off('playInfo')
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.player {
  height: 100%;
  width: 100%;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
      opacity: 0.7;
    }
    img {
      margin-top: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .navBar {
    padding: 1rem 2rem;
    // height: 4.4rem;
    color: #fff;
    text-align: left;
    display: flex;
    width: 100%;
    align-items: center;
    // position: fixed;
    // top: 0;
    font-size: 1.8rem;
    div {
      display: flex;
      align-items: center;
      .info {
        display: block;
        margin-left: 2rem;
        font-size: 1.6rem;
        p {
          margin-bottom: 0.5rem;
          line-height: auto;
        }
        span {
          font-size: 1.4rem;
        }
      }
    }
  }
  .playImg {
    padding: 0 4rem;
    width: 100%;
    text-align: center;
    top: 22%;
    position: fixed;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .btns {
    position: fixed;
    bottom: 0;
    font-size: 3rem;
    width: 100%;
    color: #fff;
    .playPrpgress {
      width: 86%;
      height: 2rem;
      margin: 0 auto;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .prpgress {
        margin-top: 0.2rem;
        background-color: #797a75;
        width: 60%;
        height: 0.2rem;
        border-radius: 10rem;
        position: relative;
        .whitePrpgress {
          width: 20%;
          height: 0.2rem;
          background-color: #fff;
        }
        .btn {
          position: absolute;
          top: -0.7rem;
          left: 0%;
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          border: 0.2rem rgb(161, 161, 161) solid;
          background-color: #fff;
        }
      }
      .startTime,
      .endTime {
        text-align: center;
        font-size: 1.4rem;
        width: 5rem;
      }
    }
    .playBtns {
      padding: 3rem 5rem 4rem 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      :nth-child(3) {
        font-size: 5rem;
      }
    }
  }
}
</style>
