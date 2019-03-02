<template>
  <div class="tickets">
    <h1>{{ details.location }}</h1>
    <h2>{{ details.city }}</h2>
	<h3>Total: {{ basketTotal }}</h3>
    <div v-for="item in tickets" class="ticket">
    	<p>{{ item.name }} - {{ item.available }} - £{{ item.price }}</p>
    	<Button v-on:click="addToBasket(item)">ADD</Button></div>
  </div>
</template>

<style>
	p {
		display: inline-block;
	}
	button {
		float: right;
		margin: 10px;
	}
	.ticket {
		width: 100%;

	}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	import { store } from '../store.js';

	export default {
		name: 'book',
		components: {
		  Event
		},
		data: () => ({
			details: {},
			tickets: []
		}),
		computed: {
			...mapGetters(['basket', 'basketTotal', 'event'])
		},
		methods: {
		    ...mapMutations([]),
			addToBasket(item) {
				this.$store.state.basket.push(item);
				console.log("add to basket", item, this.$store.state.basket);
				// this.addToBasket('addToBasket', item)
			}
		},
		mounted() {
			console.log("start app book url params", this.$route.params.id);
			console.log("start app book", this.basket);
			this.details = this.event("1");
			this.tickets = this.details.tickets;
			console.log("start app book details", this.details);
		}
	}

</script>