<template>
  <div>
    <div class="img-container">
      <img alt="Vue logo" src="../assets/mic-stand.jpg">
    </div>
    <h1>{{ msg }}</h1>
    <p>Home page</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-container {
  width: 100%;
  overflow: hidden;
  img {
    /* width: 100%; */
    max-height: 300px;
  }
}
</style>
