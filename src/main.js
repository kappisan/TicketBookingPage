import Vue from 'vue'
import VueStripeCheckout from 'vue-stripe-checkout';

import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueStripeCheckout, 'pk_test_TW1GoO5LZzgKfIl4oCobQIPF');


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
