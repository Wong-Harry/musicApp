<template>
  <div class="list">
    <div
      class="item"
      v-for="(item, index) in hotListData.slice(0,4)"
      :key="index"
      @click="openSongList(item.name)"
    >
      <div class="titleImg">
        <img :src="item.coverImgUrl">
      </div>
      <div class="content">
        <p>{{item.name}}</p>
        <ul>
          <li v-for="(items, indexs) in item.tracks" :key="indexs">
            <span>{{indexs+1}}.</span>
            <span>{{items.first}}</span>
            <span>-</span>
            <span>{{items.second}}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="otherItem">
      <div
        class="songAggregate"
        v-for="(item, index) in hotListData.slice(4)"
        :key="index"
        @click="openSongList(item.name)"
      >
        <div class="imgItem">
          <img :src="item.coverImgUrl">
          <span class="updateTime">{{item.updateFrequency}}</span>
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topList',
  data () {
    return {
      hotListData: []
    }
  },
  methods: {
    getHotList () {
      this.$axios
        .get('http://203.195.175.50:3000/toplist/detail')
        .then(data => {
          if (data.status === 200) {
            this.hotListData = data.data.list
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    openSongList (songName) {
      let songId = '0'
      switch (songName) {
        case '云音乐新歌榜':
          songId = '0'
          break
        case '云音乐热歌榜':
          songId = '1'
          break
        case '网易原创歌曲榜':
          songId = '2'
          break
        case '云音乐飙升榜':
          songId = '3'
          break
        case '云音乐电音榜':
          songId = '4'
          break
        case 'UK排行榜周榜':
          songId = '5'
          break
        case '美国Billboard周榜':
          songId = '6'
          break
        case 'KTV唛榜':
          songId = '7'
          break
        case 'iTunes榜':
          songId = '8'
          break
        case 'Hit FM Top榜':
          songId = '9'
          break
        case '日本Oricon周榜':
          songId = '10'
          break
        case '云音乐韩语榜':
          songId = '11'
          break
        case '韩国Mnet排行榜周榜':
          songId = '12'
          break
        case '韩国Melon原声周榜':
          songId = '13'
          break
        case '中国TOP排行榜(港台榜)':
          songId = '14'
          break
        case '中国TOP排行榜(内地榜)':
          songId = '15'
          break
        case '香港电台中文歌曲龙虎榜':
          songId = '16'
          break
        case '华语金曲榜':
          songId = '17'
          break
        case '中国嘻哈榜':
          songId = '18'
          break
        case '法国 NRJ Vos Hits 周榜':
          songId = '19'
          break
        case '台湾Hito排行榜':
          songId = '20'
          break
        case 'Beatport全球电子舞曲榜':
          songId = '21'
          break
        case '云音乐ACG音乐榜':
          songId = '22'
          break
        case '云音乐嘻哈榜':
          songId = '23'
          break
        default:
          songId = '404'
          break
      }
      songId !== '404' ? this.$router.push({ name: 'topListSongList', params: { idx: songId } }) : songId = '404'
    }
  },
  mounted () {
    this.getHotList()
  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 1rem 1.1rem;
  background-color: #f4f4f4;
  height: 100%;
  .item {
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    height: 10rem;
    .titleImg {
      display: inline-block;
      width: 10rem;
      img {
        width: 100%;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
      }
    }
    .content {
      background-color: #fff;
      color: #000;
      width: calc(100% - 10rem);
      position: relative;
      height: 100%;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      color: rgb(119, 119, 119);
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      p {
        color: rgb(59, 59, 59);
        font-size: 1.5rem;
        font-weight: 550;
      }
      ul {
        bottom: 0;
        li {
          margin-bottom: 0.2rem;
          display: flex;
          align-items: center;
          height: 1.8rem;
          width: 100%;
          overflow: hidden;
          span {
            height: 1.8rem;
            margin-right: 0.3rem;
          }
        }
      }
    }
  }

  .otherItem {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .songAggregate {
      padding: 0.5rem;
      width: 33%;

      .imgItem {
        display: inline-block;
        position: relative;

        span {
          position: absolute;
          left: 10px;
          bottom: 5px;
          color: #fff;
          font-size: 1.2rem;
        }
        img {
          border-radius: 1rem;
          width: 100%;
        }
      }
      p {
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
