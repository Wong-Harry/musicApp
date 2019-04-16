<template>
  <div class="banner">
    <a-carousel :afterChange="onChange" autoplay>
      <div>
        <img class="picItem" src="../assets/2.jpg">
      </div>
      <div>
        <img class="picItem" src="../assets/3.jpg">
      </div>
      <div>
        <img class="picItem" src="../assets/4.jpeg">
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {};
  },
  methods: {
    onChange() {
    }
  }
};
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

  .ant-carousel {
    .slick-slide h3 {
      // color: #fff;
    }
  }

  .picItem {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
}
</style>



