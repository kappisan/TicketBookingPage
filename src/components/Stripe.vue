<template>
  <div>
    <vue-stripe-checkout
      ref="checkoutRef"
      :image="image"
      :name="name"
      :description="description"
      :currency="currency"
      :amount="amount"
      :allow-remember-me="false"
      @done="done"
      @opened="opened"
      @closed="closed"
      @canceled="canceled"
    ></vue-stripe-checkout>
    <button @click="checkout"><font-awesome-icon :icon="['fab', 'stripe']" /> &nbsp; PAY WITH STRIPE</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      image: 'https://i.imgur.com/j0nTbtv.jpg',
      name: 'Pugs are the best!',
      description: 'woof woof',
      currency: 'GBP'
    }
  },
  props: {
    amount: Number
  },
  methods: {
    async checkout () {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      const { token, args } = await this.$refs.checkoutRef.open();
    },
    done ({token, args}) {
      console.log("TRANSACTION FINISHED!!!");
    },
    opened () {
      // do stuff 
    },
    closed () {
      // do stuff 
    },
    canceled () {
      // do stuff 
    }
  }
}
</script>