<template>
  <div class="singer">
    <div>这是歌手</div>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'singer',
  components: {},
  methods: {
    getSongerList () {
      this.$axios.get('http://203.195.175.50:3000/toplist/artist')
        .then(data => {
          console.log(data)
        }).catch(data => {
          console.log(data)
        })
    }
  },
  mounted () {
    this.getSongerList()
  }
}
</script>
