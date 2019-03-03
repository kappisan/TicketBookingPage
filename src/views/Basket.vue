<template>
	<div class="tickets">
		<h1>BASKET</h1>
		<h3>Items: {{ basketItems }}</h3>
		<h3>Total: £{{ basketTotal }}</h3>
		<div v-for="item in basket" class="basket-item">
			<p>{{ item.quantity }} x {{ item.price }}</p>
			<p>{{ item.name }}</p>
			<p><b>Total:</b> {{ item.quantity * item.price }} </p>
			<p><font-awesome-icon icon="trash-alt" /></p>
		</div>

		<p style="width: 100%; text-align: right; padding: 20px;" ><b>Basket Total: </b> £{{ basketTotal }}</p>

		<router-link to="/bitcoin">
			<button class="pay-with-btc"><font-awesome-icon :icon="['fab', 'bitcoin']" /> &nbsp; BITCOIN PAYMENT</button>
		</router-link>
		<router-link to="/checkout">
			<button><font-awesome-icon icon="credit-card" /> &nbsp; PAY BY CARD</button>
		</router-link>
	</div>

</template>

<style lang="scss">
	button {
		background-color: #333;
		width: 300px;
		color: #fff;
		border-style: none;
		height: 40px;
	}

	.pay-with-btc {
		background: linear-gradient(to right, #f7931a 60%, #ffae4d 90%);
	}

	.basket-item {
		padding: 10px;
		margin: 20px;
		border-style: solid;
		border-width: 0 0 1px 0;
		p {
			padding: 0 10px;
		}
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