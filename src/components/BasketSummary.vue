<template>
  <div class="basket-summary">
    <div v-for="item in basket" class="basket-item">
      <p>{{ item.quantity }} x {{ item.price }}</p>
      <p>{{ item.date }}</p>
      <p>{{ item.location }}, {{ item.city }}</p>
      <p>{{ item.name }}</p>
      <p><b>Total:</b> {{ item.quantity * item.price }} </p>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
import { store } from '../store.js';

export default {
  store,
  name: 'BasketSummary',
  computed: {
    path() {
      return this.img;
    },
    ...mapGetters([
      // Mounts the "count" getter to the scope of your component.
      'basket'
    ])
  },
  mounted: () => {
    console.log("basket sumary component mounted");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .basket-item {
    padding: 10px;
    margin: 20px;
    border-style: solid;
    border-width: 0 0 1px 0;
    p {
      padding: 0 10px;
    }
  }

  .basket-summary {
    margin-bottom: 60px;  
  }

</style>
