<template>
  <div class="tickets">
    <h1>BASKET</h1>
	<h3>Total: {{ basketTotal }}</h3>
    <p v-for="item in basket">{{ item }}</p>
  </div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	import { store } from '../store.js';

	export default {
		name: 'basket',
		components: {
		  Event
		},
		computed: {
			...mapGetters(['basket', 'basketTotal'])
		},
		mounted() {
			console.log("start app basket", this.basket);
		}
	}

</script>