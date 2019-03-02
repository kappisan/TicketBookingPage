<template>
  <div class="event">
    <div class="img-container">
      <img :src="path">
    </div>
    <h1>{{ location }}</h1>
    <p>{{ date }} {{ time }} <span class="city">{{ city }}</span></h1>
    <p>Tickets available: {{ tickets }}</p>
    <p class="text">{{ desc }}</p>
    <button v-on:click="addToBasket">Add</button>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
import { store } from '../store.js';

export default {
  store,
  name: 'Event',
  props: {
    img: String,
    location: String,
    city: String,
    desc: String,
    date: String,
    tickets: Number,
    time: String
  },
  computed: {
    path() {
      return this.img;
    },
    ...mapGetters([
      // Mounts the "count" getter to the scope of your component.
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increment'
    ]),
    addToBasket() {
      this.increment();
      console.log("add to basket", this.count);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.event {
  background-color: #aaa;
  width: 300px;
  display: inline-block;
  margin: 10px;
  vertical-align: top;
  .text {
    padding: 20px;
    text-align: justify;
  };
  .img-container {
    height: 200px;
    img {
      width: 100%;
    }
  }
}
</style>
