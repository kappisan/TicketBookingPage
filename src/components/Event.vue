<template>
  <div class="event">
    <div class="img-container">
      <img :src="path">
    </div>
    <div class="content-container">
      <h1>{{ location }}</h1>
      <p>{{ date }} {{ time }} <span class="city">{{ city }}</span></p>
      <p>Tickets available: {{ ticketsAvaialable }}</p>
      <p class="text">{{ desc }}</p>
      <router-link :to="'/book/'+ eid">
        <button>Book Tickets</button>
      </router-link>
    </div>
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
    eid: String,
    location: String,
    city: String,
    desc: String,
    date: String,
    tickets: Array,
    time: String
  },
  computed: {
    path() {
      return this.img;
    },
    ticketsAvaialable() {
      return 100;
    },
    ...mapGetters([
      // Mounts the "count" getter to the scope of your component.
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increment'
    ])
  },
  mounted: () => {
    console.log("event mounted event component");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.event {
  border-color: #aaa;
  display: inline-block;
  margin: 10px 0;
  vertical-align: top;
  border-style: solid;
  border-width: 0 0 2px 0;
  button {
    height: 40px;
    width: 200px;
    margin-bottom: 20px;
    color: #fff;
    border-style: none;
    background-color: #333;
    font-size: 16px;
  };
  .text {
    padding: 20px;
    text-align: justify;
  };
  .content-container {
    display: inline-block;
    max-width: 700px;
  };
  .img-container {
    height: 200px;
    width: 300px;
    display: inline-block;
    margin: 0 10px;
    img {
      width: 300px;
      margin-top: 10px;
    }
  }
}
</style>
