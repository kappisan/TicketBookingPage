<template>
  <div class="event">
    <img :src="path">
    <h1>{{ location }}</h1>
    <p>Tickets available: {{ tickets }}</p>
    <p>{{ date }} - {{ time }}</p>
    <p class="text">{{ desc }}</p>
  </div>
</template>

<script>


export default {
  name: 'Event',
  props: {
    img: String,
    location: String,
    desc: String,
    date: String,
    tickets: Number,
    time: String
  },
  computed: {
    path() {
      return this.img;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.event {
  background-color: #aaa;
  width: 300px;
  .text {
    padding: 20px;
    text-align: justify;
  };
  img {
    width: 100%;
  }
}
</style>
