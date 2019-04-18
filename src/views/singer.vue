<template>
  <div class="singer">
    <div class="musicList">
      <div
        class="item"
        @click="openSongList(item.id)"
        v-for="(item, index) in showMusicListData"
        :key="index"
      >
        <div class="imgBox">
          <img :src="item.coverImgUrl">
          <div class="playCount">
            <a-icon type="star"/>
            <span>{{Math.round(item.playCount)}}</span>
          </div>
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'singer',
  data () {
    return {
      allMusicListData: [],
      showMusicListData: []
    }
  },
  methods: {
    getMusicData () {
      this.$axios.get('http://203.195.175.50:3000/top/playlist', {
        params: {
          limit: 21
        }
      })
        .then(data => {
          this.allMusicListData = data.data.playlists
          this.addMusicList()
        }).catch(err => {
          console.log(err)
        })
    },

    addMusicList () {
      for (const iterator of this.allMusicListData) {
        this.showMusicListData.push(iterator)
      }
    },

    openSongList (songId) {
      this.$router.push({ name: 'songList', params: { listId: songId } })
    }
  },
  mounted () {
    this.getMusicData()
  }
}
</script>

<style lang="scss" scoped>
.singer {
  .musicList {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1rem;

    .item {
      width: 33%;
      padding: 1rem 1rem 0rem 1rem;
      .imgBox {
        position: relative;
        .playCount {
          position: absolute;
          top: 0.1rem;
          right: 0.6rem;
          color: #fff;
          font-size: 1.2rem;
        }
        img {
          width: 100%;
          height: 9rem;
          border-radius: 1rem;
          object-fit: cover;
        }
      }
      p {
        padding: 0.2rem 0 0 0;
        height: 3.8rem;
        overflow: hidden;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
