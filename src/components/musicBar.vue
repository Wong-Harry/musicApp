<template>
  <div class="musicBar" @click="openPlayer">
    <div class="imgBox">
      <img :src="picUrl">
      <div>
        <p>{{songName}}</p>
        <span>{{songer}}</span>
      </div>
    </div>
    <div class="btns">
      <a-icon type="pause-circle" v-if="isplay=='play'" @click="playMusci($event,'pause')"/>
      <a-icon type="play-circle" v-if="isplay=='pause'" @click="playMusci($event,'play')"/>
      <a-icon type="menu-unfold" @click="openList"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'musicBar',
  data () {
    return {
      picUrl: '',
      songName: '',
      songer: '',
      isplay: ''
    }
  },
  methods: {
    openPlayer () {
      this.$router.push('/player')
    },
    playMusci (e, state) {
      this.$eventBus.$emit('isplay', state)
      state == 'play' ? this.isplay = 'play' : this.isplay = 'pause'
      e.stopPropagation()
    },
    openList (e) {
      e.stopPropagation()
      console.log(e)
    }
  },
  beforeMount () {
    console.log(44455)
    this.$eventBus.$emit('getSongList', 'musicBar')
    this.$eventBus.$on('listenSongData', (data) => {
      data.isplay ? this.isplay = 'pause' : this.isplay = 'play'
      this.picUrl = data.picUrl
      this.songName = data.name
      this.songer = data.songer
    })
  },
  mounted () {

  },
  beforeDestroy () {
    // console.log(9999);
    // this.$eventBus.$off('getSongList')
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
