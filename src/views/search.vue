<template>
  <div class="search">
    <h1 @click="goBack">这是搜索页面</h1>
  </div>
</template>

<script>
export default {
  name: 'search',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
