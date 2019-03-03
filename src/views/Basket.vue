<template>
	<div class="tickets">
		<h1>BASKET</h1>
		<h3>Items: {{ basketItems }}</h3>
		<h3>Total: £{{ basketTotal }}</h3>
		<p v-for="item in basket">{{ item }}</p><br />

		<router-link to="/checkout">
			<button>Checkout</button>
		</router-link>
	</div>

</template>

<style>
	button {
		background-color: #333;
		width: 300px;
		color: #fff;
		border-style: none;
		height: 40px;
	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	import { store } from '../store.js';

	export default {
		name: 'basket',
		components: {
		  Event
		},
		computed: {
			...mapGetters(['basket', 'basketTotal', 'basketItems'])
		},
		mounted() {
			console.log("start app basket", this.basket);
		}
	}

</script>