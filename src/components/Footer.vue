<template>
  <div class="Header">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
