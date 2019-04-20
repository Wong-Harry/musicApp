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
      endTime: '',
      playModel: 'loop'
    }
  },
  methods: {
    // 发送歌曲信息给底部播放栏
    sendSongListToMusicBar () {
      let songInfo = {
        id: this.data.id,
        name: this.data.name,
        songer: this.data.songer,
        picUrl: this.data.picUrl,
        isplay: this.$refs.audioComponent.paused
      }
      setTimeout(() => {
        this.$eventBus.$emit('listenSongData', songInfo)
      }, 1);
    },
    // 发送歌曲信息给播放页面
    sendSongListToplyer () {
      this.endTime = this.$refs.audioComponent.duration
      let playSong = {
        id: this.data.id,
        endTime: '',
        name: this.data.name,
        songer: this.data.songer,
        picUrl: this.data.picUrl,
        returnTime: this.endTime,
        isplay: this.$refs.audioComponent.paused
      };
      let min = (this.endTime / 60).toString().split('.')
      let second = Math.round(this.endTime % 60).toString()
      if (second < 10) second = '0' + second.toString()
      if (min[0] < 10) min[0] = '0' + min[0].toString()
      playSong.endTime = `${min[0]}:${second}`
      // 发送
      setTimeout(() => {
        this.$eventBus.$emit('playInfo', playSong)
        console.log(playSong);

      }, 1);
    }
  },
  mounted () {
    this.data = this.playList[0]

    // 添加歌曲到播放列表
    this.$eventBus.$on('addSong', (data) => {
      this.playList.push(data)
      this.data = data
      this.$refs.audioComponent.autoplay = true
      this.$refs.audioComponent.play()
      this.sendSongListToMusicBar();
      console.log(this.playList);
    })

    // 发送当前播放歌曲的信息
    this.$eventBus.$on('getMusicState', (data) => {
      this.sendSongListToplyer();
    })

    // 发送歌曲信息给页脚的播放栏
    this.$eventBus.$on('getSongList', (data) => {
      this.sendSongListToMusicBar();
    })

    // 改变播放进度的时候
    this.$eventBus.$on('fastSeek', (data) => {
      this.$refs.audioComponent.currentTime = data
    })

    // 播放事件
    this.$eventBus.$on('isplay', (data) => {
      data == 'play' ? this.$refs.audioComponent.play() : this.$refs.audioComponent.pause()
    })

    // 上一首
    this.$eventBus.$on('pre', (data) => {
      for (let index = 0; index < this.playList.length; index++) {
        const element = this.playList[index];
        if (element.id == this.data.id && index == 0) {
          this.data = this.playList[this.playList.length - 1]
          this.sendSongListToplyer();
        } else if (element.id == this.data.id && index == this.playList.length - 1 || element.id == this.data.id) {
          this.data = this.playList[index - 1]
          this.sendSongListToplyer();
          return
        }
      }
    })
    // 下一首
    this.$eventBus.$on('next', (data) => {
      for (let index = 0; index < this.playList.length; index++) {
        const element = this.playList[index];
        if (element.id == this.data.id && index == this.playList.length - 1) {
          this.data = this.playList[0]
          this.sendSongListToplyer();
        } else if (element.id == this.data.id) {
          this.data = this.playList[index + 1]
          this.sendSongListToplyer();
          return
        }
      }
    })

    // 发送秒数给，并且判断当前歌曲播放完没有
    setInterval(() => {
      let min = 0
      let second = 0
      let showTime = 0
      let currentTime = this.$refs.audioComponent.currentTime
      if (currentTime < 60) {
        second = parseInt(currentTime).toString()
        if (second < 10) second = '0' + second.toString()
        if (min < 10) min = '0' + min.toString()
        showTime = `${min}:${second} `
      } else {
        min = (currentTime / 60).toString().split('.')
        second = Math.round(currentTime % 60).toString()
        if (second < 10) second = '0' + second.toString()
        if (min[0] < 10) min[0] = '0' + min[0].toString()
        showTime = `${min[0]}:${second}`
      }
      let time = {
        returnTime: currentTime,
        showTime: showTime
      }
      this.$eventBus.$emit('currentTime', time)
      // 放完上一首切歌
      if (this.$refs.audioComponent.ended) {
        for (let index = 0; index < this.playList.length; index++) {
          const element = this.playList[index];
          if (element.id == this.data.id && index == this.playList.length - 1) {
            this.data = this.playList[0]
          } else if (element.id == this.data.id) {
            this.data = this.playList[index + 1]
            return
          }
        }
      }

    }, 300);
  }
}
</script>

<style scoped lang="scss">
.musicPlayer {
}
</style>
