<template>
	<div id="app">
		<div id="nav">
			<div class="nav-links">
				<router-link to="/">Home</router-link>
				<router-link to="/events">Events</router-link>
				<a href="https://www.facebook.com/lavell.crawford.52" target="_blank">Follow Me</a>
			</div>
			<div class="basket-link">
				<router-link to="/basket">£{{ basketTotal }} &nbsp; <font-awesome-icon icon="shopping-basket" /></router-link>
			</div>
		</div>
		<div id="router-container">
			<router-view/>
		</div>
		<div id="footer">
			<p>Copyright - <a href="https://menacingmedia.com" target="_blank">Menacing Media 2019</a></p>
		</div>
	</div>
</template>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 70px 0 0 0;
	position: absolute;
	left: 0;
	right: 0;
	a {
		color: inherit;
		text-decoration: none;
	}
	h1 {
		margin-top: 40px;
	}
	#nav {
		padding: 20px;
		background-color: #000;
		left: 0;
		right: 0;
		top: 0;
		position: fixed;
		z-index: 9;
		.basket-link {
			z-index: 99;
    		padding-top: 20px;
		};
		.nav-links {
			position: absolute;
			text-align: center;
		}
		div {
			float: right;
		}
		a {
			font-weight: bold;
			color: #aaa;
			text-decoration: none;
			padding: 0 10px;
			&.router-link-exact-active {
				color: #fff;
			}
		}
	}
	#router-container {
		min-height: 800px;
	}
	#footer {
		width: 100%;
		height: 100px;
		color: #fff;
		background-color: #000;
		left: 0;
		bottom: 0;
		padding: 40px;
	}
}
</style>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	import { store } from './store.js';

	export default {
		name: 'app',
		components: {
		  Event
		},
		computed: {
			...mapGetters(['basketItems', 'basketTotal'])
		},
		mounted() {
			console.log("start app app main", this.basketTotal);
		}
	}

</script>