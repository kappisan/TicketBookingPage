<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/tickets">Tickets</router-link>
			<div>
				<router-link to="/basket">{{ basketTotal }} <font-awesome-icon icon="shopping-basket" /></router-link>
			</div>
		</div>
		<div id="router-container">
			<router-view/>
		</div>
		<div id="footer">
			<p>footer</p>
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
	margin: 100px 0 0 0;
	position: absolute;
	left: 0;
	right: 0;
	#nav {
		padding: 30px;
		background-color: #000;
		left: 0;
		right: 0;
		top: 0;
		position: fixed;
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
			...mapGetters(['basketTotal'])
		},
		mounted() {
			console.log("start app app main", this.basketTotal);
		}
	}

</script>