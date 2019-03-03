<template>
  <div class="tickets">
    <h1>{{ details.location }}</h1>
    <h2>{{ details.city }}</h2>
	<h3>Total: {{ basketTotal }}</h3>
    <div v-for="(item, index) in tickets" class="ticket">
    	<p>{{ item.name }} - {{ item.available }} - £{{ item.price }}</p>
    	<Button v-on:click="addToBasket(index)">ADD</Button></div>
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
			addToBasket(key) {
				let item = this.tickets[key];
				console.log(index, "add to basket item", item);
				let cid = item.tid + "-" + this.$route.params.id;
				let index = this.$store.state.basket.map(function(e) { return e.cid; }).indexOf(cid);
				
				console.log("already in basket index", index);

				if (index === -1) {
					console.log("add to basket", this.$route.params.id, this.$store.state.basket);
					item.quantity = 1;
					item.eid = this.$route.params.id;
					item.cid = cid;
					this.$store.state.basket.push(item);
				} else {
					console.log("already in basket", this.$store.state.basket);
					let match = this.$store.state.basket[index];
					match.quantity++;
					this.$store.state.basket.splice(index, 1, match);
				}
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