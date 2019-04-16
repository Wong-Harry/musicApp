<template>
  <div class="search">
    <h1 @click="goBack">This is an search page</h1>
  </div>
</template>

<script>
// import banner from "@components/banner";
export default {
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  },
};
</script>