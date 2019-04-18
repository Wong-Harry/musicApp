<template>
  <div class="songList">
    <div class="header">
      <div class="navBar">
        <a-icon type="arrow-left" @click="goBack"/>
        <span>歌单</span>
      </div>
      <div class="listInfo">
        <div class="titleImg">
          <img :src="songList.coverImgUrl">
        </div>
        <div class="info">
          <p class="title">{{songList.name}}</p>
          <div class="introduce">
            <div>
              <span>{{songList.description}}</span>
            </div>
            <a-icon type="caret-down"/>
          </div>
          <!-- <a-button>播放全部</a-button> -->
          <div class="songListCount">
            <p>播放量：{{songList.playCount}}</p>
            <p v-if="songList.trackIds">共{{songList.trackIds.length}}首歌曲</p>
          </div>
        </div>
      </div>
      <img :src="bgImg" class="bgImg">
    </div>

    <div class="list">
      <div class="paly">
        <div>
          <a-icon type="play-circle"/>
          <span>播放全部</span>
        </div>
      </div>
      <div class="listItem">
        <div v-for="(item, index) in songListData" :key="index" class="item">
          <p class="nums">{{index+1}}</p>
          <div class="songInfo" @click="playSong(item)">
            <div>
              <p>{{item.name}}</p>
              <span>{{item.ar['0'].name}}</span>
            </div>
            <a-icon type="play-circle" class="playOne"/>
          </div>
        </div>
      </div>
    </div>

    <music-Bar/>
  </div>
</template>

<script>
export default {
  name:'songList',
  data () {
    return {
      songListId: this.$route.params.listId,//歌单id
      songIdx: this.$route.params.idx,//排行榜id
      songList: [],
      songListData: [],
      allSongListId: '',
      bgImg: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    // 获取歌曲列表
    getSongList () {
      if (this.songListId) {
        this.$axios
          .get('http://203.195.175.50:3000/playlist/detail', {
            params: {
              id: this.songListId
            }
          })
          .then(data => {
            console.log(data)
            if (data.status === 200) {
              this.songList = data.data.playlist
              for (
                let index = 0;
                index < data.data.playlist.trackIds.length;
                index++
              ) {
                const element = data.data.playlist.trackIds[index]
                index === data.data.playlist.trackIds.length - 1
                  ? (this.allSongListId += `${element.id}`)
                  : (this.allSongListId += `${element.id},`)
              }
              this.bgImg = data.data.playlist.coverImgUrl
              this.getSongInfo()
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else if (this.songIdx) {
        this.$axios
          .get('http://203.195.175.50:3000/top/list', {
            params: {
              idx: this.songIdx
            }
          })
          .then(data => {
            console.log(data)
            if (data.status === 200) {
              this.songList = data.data.playlist
              for (
                let index = 0;
                index < data.data.playlist.trackIds.length;
                index++
              ) {
                const element = data.data.playlist.trackIds[index]
                index === data.data.playlist.trackIds.length - 1
                  ? (this.allSongListId += `${element.id}`)
                  : (this.allSongListId += `${element.id},`)
              }
              this.bgImg = data.data.playlist.coverImgUrl
              this.getSongInfo()
            }
          })
          .catch(err => {
            console.log(err)

          })
      }
    },
    // 获取歌曲详情
    getSongInfo () {
      this.$axios
        .get('http://203.195.175.50:3000/song/detail', {
          params: {
            ids: this.allSongListId
          }
        })
        .then(data => {
          if (data.status === 200) {
            this.songListData = data.data.songs
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取歌曲的url并播放
    playSong (songData) {
      console.log(songData);
      let songInfo = {
        url: '',
        name: songData.name,
        songer: songData.ar['0'].name,
        picUrl: songData.al.picUrl
      }

      this.$axios.get('http://203.195.175.50:3000/song/url', {
        params: {
          id: songData.id
        }
      }).then(data => {
        if (data.status === 200) {
          console.log(data);
          // 存储歌曲的信息
          songInfo.url = data.data.data['0'].url
          console.log(songInfo);

        }

      }).catch(err => console.log(err))
    }
  },
  mounted () {
    this.getSongList()
  }
}
</script>

<style lang="scss">
.songList {
  .header {
    padding: 0.5rem 0 2.5rem;
    overflow: hidden;
    position: relative;
    .navBar {
      padding: 0 2rem;
      height: 4.4rem;
      color: #fff;
      text-align: left;
      display: flex;
      align-items: center;
      font-size: 1.8rem;
      span {
        margin-left: 2rem;
      }
    }
    .listInfo {
      padding: 0 2rem;
      display: flex;
      .titleImg {
        margin-right: 2rem;
        img {
          width: 14rem;
          height: 14rem;
          object-fit: cover;
          border-radius: 0.5rem;
        }
      }
      .info {
        text-align: left;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        .title {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 600;
        }
        .introduce {
          color: #fff;
          display: flex;
          div {
            font-size: 1.2rem;
            padding-right: 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; //向显示多少行就给多大值
            -webkit-box-orient: vertical;
          }
        }
        .songListCount {
          color: #fff;
          font-size: 1.2rem;
        }
      }
    }
    .bgImg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      object-fit: cover;
      filter: blur(20px);
    }
  }
  .list {
    text-align: left;
    .paly {
      // height: 4.4rem;
      display: flex;
      align-items: center;
      padding: 0.5rem 2rem;
      color: #fff;
      font-size: 1.6rem;
      div {
        background-color: #bd76ff;
        border-radius: 2rem;
        padding: 0.5rem 1.5rem;
        span {
          margin-left: 1.2rem;
        }
      }
    }
    .listItem {
      color: #000;
      .nums {
        color: rgb(141, 141, 141);
      }
      .item {
        padding: 0.8rem 2rem;
        display: flex;
        align-items: center;
        border-bottom: 1px rgb(245, 245, 245) solid;
        .songInfo {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0rem 0rem 0 2rem;
          p {
            margin-bottom: 0.5rem;
          }
          .playOne {
            font-size: 2rem;
            color: rgb(141, 141, 141);
          }
        }
      }
    }
  }
}
</style>
