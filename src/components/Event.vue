<template>
  <div class="event">
    <div class="img-container">
      <img :src="path">
    </div>
    <h1>{{ location }}</h1>
    <p>{{ date }} {{ time }} <span class="city">{{ city }}</span></h1>
    <p>Tickets available: {{ ticketsAvaialable }}</p>
    <p class="text">{{ desc }}</p>
    <router-link :to="'/book/'+ eid">
      <button>Book Tickets</button>
    </router-link>
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
  background-color: #aaa;
  width: 300px;
  display: inline-block;
  margin: 10px;
  vertical-align: top;
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
  .img-container {
    height: 200px;
    img {
      width: 100%;
    }
  }
}
</style>
