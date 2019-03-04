<template>
	<div class="tickets">
		<h1>PAY WITH BITCOIN</h1>
		<h3>Items: {{ basketItems }}</h3>
		<h3>Total: £{{ basketTotal }}</h3>

		<BasketSummary />

		<!-- https://codepen.io/Apirone/pen/wYvqLq -->
		<div class="row mx-0 pt-5 d-flex justify-content-center">
		  <div class="col-xs-4 col-sm-6 col-md-5 col-lg-4 col-xl-3">
		    <div class="card shadow-lg">
		      <div class="card-header card-header-divider text-center pt-4"> <img src="https://apirone.com/static/promo/bitcoin_logo_vector.svg" class="img-fluid" style="max-height: 42px;" width="205" alt=""><br>
		      <img src="https://apirone.com/api/v1/qr?message=1PsgZN1aMnUr5bWsre7Crrer2CrFynDqzP&format=svg" style="max-width: 190px;" alt=""> </div>
		      <div class="card-body px-0">
		        <p class="text-center" style="padding: 10px 0 40px 0"><small><strong>1PsgZN1aMnUr5bWsre7Crrer2CrFynDqzP</strong></small></p>
		        <p class="text-muted text-center">Scan QR code and pay {{ basketTotalBTC }} BTC (£{{ basketTotal }})
		          to the above payment address.</p>
		          <p>Payment will be credited after 3 confirmations.<br>
		        </p>
		      </div>
		    </div>
		  </div>
		</div>
		<p style="width: 100%; text-align: right; padding: 20px;" ><b>Basket Total: </b> £{{ basketTotal }}</p>
	</div>

</template>

<style lang="scss">
	.text-center {
		width: 100%;
	}
</style>

<script>
	import { mapGetters } from 'vuex';

	import BasketSummary from '@/components/BasketSummary.vue';

	export default {
		name: 'bitcoin',
		components: {
		  BasketSummary
		},
		computed: {
			...mapGetters(['basket', 'basketTotal', 'basketTotalBTC', 'basketItems'])
		}
	}

</script>