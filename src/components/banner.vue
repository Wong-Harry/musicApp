<template>
  <div class="banner">
    <a-carousel :afterChange="onChange" autoplay>
      <div v-for="(item, index) in banners" :key="index">
        <img class="picItem" :src="item.imageUrl">
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      banners: []
    }
  },
  methods: {
    onChange () { },
    getBanner () {
      this.$axios
        .get('http://203.195.175.50:3000/banner')
        .then(data => {
          if (data.status === 200) {
            this.banners = data.data.banners
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getBanner()
  }
}
</script>

<style scoped lang="scss">
.banner {
  .ant-carousel {
    .slick-slide {
      text-align: center;
      height: 16rem;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }
  }

  .picItem {
    width: 100%;
    object-fit: cover;
  }
}
</style>
