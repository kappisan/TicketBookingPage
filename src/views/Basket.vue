<template>
	<div class="tickets">
		<h1>BASKET</h1>
		<h3>Items: {{ basketItems }}</h3>
		<h3>Basket Total: &nbsp; £{{ basketTotal }}</h3>

		<!-- with option to delete -->
		<div v-for="item in basket" class="basket-item">
			<p>{{ item.quantity }} x {{ item.price }}</p>
			<p>{{ item.date }}</p>
			<p>{{ item.location }}, {{ item.city }}</p>
			<p>{{ item.name }}</p>
			<p><b>Total:</b> £{{ item.quantity * item.price }} </p>
			<p v-on:click="removeFromBasket(item.cid)"><font-awesome-icon icon="trash-alt" /></p>
		</div>

		<p style="width: 100%; text-align: right; padding: 20px;" ><b>Basket Total: </b> £{{ basketTotal }}</p>

		<router-link to="/bitcoin">
			<button class="pay-with-btc"><font-awesome-icon :icon="['fab', 'bitcoin']" /> &nbsp; BITCOIN PAYMENT</button>
		</router-link>
		<router-link to="/checkout">
			<button><font-awesome-icon icon="credit-card" /> &nbsp; PAY BY CARD</button>
		</router-link>
		<div style="display: inline-block; width: 300px;">
			<Stripe :amount="basketTotal * 100" />
		</div>
	</div>

</template>

<style lang="scss">
	.tickets {
		button {
			background-color: #333;
			max-width: 300px;
			width: 100%;
			color: #fff;
			border-style: none;
			height: 40px;
			margin: 10px;
		}
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

	import BasketSummary from '@/components/BasketSummary.vue';
	import Stripe from '@/components/Stripe.vue';

	export default {
		name: 'basket',
		components: {
		  BasketSummary,
		  Stripe
		},
		methods: {
			removeFromBasket(cid) {
				this.$store.commit('removeFromBasket', cid);
			}
		    // ...mapMutations(['removeFromBasket']),
		},
		computed: {
			...mapGetters(['basket', 'basketTotal', 'basketItems'])
		},
		mounted() {
			console.log("start app basket", this.basket);
		}
	}

</script>