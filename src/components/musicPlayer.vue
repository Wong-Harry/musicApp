<template>
  <div class="musicPlayer">
    <!-- controls -->
    <audio ref="audioComponent" :name="data.id" :src="data.url" preload></audio>
  </div>
</template>

<script>
export default {
  name: 'musicPlayer',
  data () {
    return {
      playList: [{
        id: 1345848098,
        name: '绿色',
        picUrl: 'https://p2.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg',
        songer: '陈雪凝',
        url: 'https://music.163.com/song/media/outer/url?id=1345848098.mp3',
        spareUrl: 'http://m10.music.126.net/20190419161328/fc21c3d2536d5a12e445039422d3f384/ymusic/76b4/dcbb/0a65/9198b18815ee8ce42ae368ae29276f78.mp3',
      }],
      data: {},
      isPlay: 'flase',
      endTime: ''
    }
  },
  methods: {

  },
  mounted () {
    this.data = this.playList[0]

    // 添加歌曲到播放列表
    this.$eventBus.$on('addSong', (data) => {
      console.log(data);
      this.playList.push(data)
      this.data = data
      this.$refs.audioComponent.autoplay = true
      this.$refs.audioComponent.play()
    })

    // 发送当前播放歌曲的信息
    this.$eventBus.$on('getMusicState', (data) => {
      console.log(data);
      console.log('开始发送');
      this.endTime = this.$refs.audioComponent.duration
      let playSong = {
        id: this.data.id,
        endTime: '',
        name: this.data.name,
        songer: this.data.songer,
        picUrl: this.data.picUrl,
        returnTime: this.endTime
      };

      let min = (this.endTime / 60).toString().split('.')
      let second = Math.round(this.endTime % 60)
      playSong.endTime = `${min[0]}:${second}`
      console.log(playSong);

      // 发送
      setTimeout(() => {
        this.$eventBus.$emit('playInfo', playSong)
      }, 50);
      // this.$eventBus.$off('getMusicState')
    })

    // 播放事件
    this.$eventBus.$on('isplay', (data) => {
      console.log(data);
      data == 'play' ? this.$refs.audioComponent.play() : this.$refs.audioComponent.pause()
    })

    setInterval(() => {
      let min = 0
      let second = 0
      let showTime = 0
      let currentTime = this.$refs.audioComponent.currentTime
      if (currentTime < 60) {
        second = parseInt(currentTime)
        showTime = `${min}: ${second} `
      } else {
        min = (currentTime / 60).toString().split('.')
        second = Math.round(currentTime % 60)
        showTime = `${min[0]}:${second}`
      }
      let time = {
        returnTime: currentTime,
        showTime: showTime
      }
      this.$eventBus.$emit('currentTime', time)
    }, 300);
  }
}
</script>

<style scoped lang="scss">
.musicPlayer {
}
</style>
