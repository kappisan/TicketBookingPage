import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import createPersistedState from 'vuex-persistedstate'
import * as _ from 'lodash'

Vue.use(Vuex)

const vuePersist = {
  reducer: state => ({
    basket: state.basket,
  }),
  saveState: (key, state, storage) => {
  	console.log("VUE PERSIST SAVE STATE")
    requestIdleCallback(() => {
      storage.setItem(key, JSON.stringify(state));
    });
  },
};

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
  	count: 0,
  	btcPriceGBP: 3000,
  	btcPriceUSD: 4000,
  	btcPriceEUR: 3500,
  	btcPriceAge: null,
  	basket: [],
  	events: []
  	/*
	events: [
		{
			eid: "brixton",
			location: "Brixton",
			city: "London",
			date: "20190420",
			time: "10pm",
			tickets: [
				{
					name: "Front Row",
					price: 59.99,
					available: 100,
					tid: "adult0"
				},
				{
					name: "Middle Auditorium",
					price: 39.99,
					available: 200,
					tid: "adult1"
				},
				{
					name: "Balcony",
					price: 89.99,
					available: 20,
					tid: "adult2"
				}
			],
			img: "https://cdn.venuescanner.com/photos/658e286008d6340dc8ed00431ff2efc2.jpg",
			desc: "The award-winning Academy Theatre was built in 1929 as the flagship of the Astoria Group’s chain of atmospheric variety theatres. The main auditorium contains Europe’s largest fixed stage, framed by an elaborate proscenium arch based on the design of the Rialto Bridge. The venue boasts a magnificent Art Deco interior, with a grand entrance hall and sweeping double stairway in the foyer."
		},
		{
			eid: "cambridge",
			location: "Cambridge Junction",
			city: "Cambridge",
			date: "20190421",
			time: "9pm",
			tickets: [
				{
					name: "Front Row",
					price: 59.99,
					available: 100,
					tid: "adult1"
				},
				{
					name: "Middle Auditorium",
					price: 39.99,
					available: 200,
					tid: "adult2"
				}
			],
			img: "https://s3-media3.fl.yelpcdn.com/bphoto/Jz9OdzMlznwjyPQZiwO8sA/o.jpg",
			desc: "At Cambridge Junction, audiences and artists experience and explore contemporary performance, popular culture, creative learning, and the rich territories in-between. We are committed to art and entertainment that is up-and-coming, youthful and cutting-edge.  We seek to be relevant and meaningful to the lives of audiences, and informed by our location in Cambridge."
		},
		{
			eid: "glasgow",
			location: "The Stand Comedy Club",
			city: "Glasgow",
			date: "20190422",
			time: "9:30pm",
			tickets: [
				{
					name: "Front Row",
					price: 39.99,
					available: 50,
					tid: "adult1"
				},
				{
					name: "Regular",
					price: 19.99,
					available: 100,
					tid: "adult2"
				}
			],
			img: "http://www.eharmony.co.uk/relationship-advice/wp-content/uploads/2014/01/The-Stand-Comedy-Club.jpg",
			desc: "With solo shows from better known performers and prime stand-up every weekend, there’s always something going on at The Stand Comedy Club Glasgow!"
		}
	]
	*/
  },
  mutations: {
    addToBasket(state, item) {
      state.basket.push(item)
    },
    updateBTCPrice(state, item) {
		console.log("updating btc price");
		axios
			.get('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then(response => {
				console.log("got coindesk data", response.data);
				const bpi = response.data.bpi;
				state.btcPriceGBP = bpi.GBP.rate_float;
				state.btcPriceUSD = bpi.USD.rate_float;
				state.btcPriceEUR = bpi.EUR.rate_float;
				state.btcPriceAge = response.data.time.updated;
			})
    },
    updateEvents(state) {
		console.log("updating events from AWS");
		axios
			.get('https://m25hqax3sj.execute-api.us-east-1.amazonaws.com/default/events')
			.then(response => {
				console.log("got events data from AWS", response.data.Items);
				let events = response.data.Items
				events.forEach((e) => {
					if (typeof e.tickets == 'string') {
						e.eid = e.event_id;
						try {
							e.tickets = JSON.parse(e.tickets);
						} catch(e) {}
					}
				})

				state.events = events;
			})
    },
    incrementBasket(state, cid) {
    	console.log("incrementBasket");
		const match = _.findIndex(state.basket, {cid: cid})
		if (match) {
		    state.basket[match].quantity++;
		    state.basket = _.cloneDeep(state.basket);
		}
    },
    clearBasket (state) {
      state.basket = [];
    },
    removeFromBasket(state, cid) {
    	console.log("removeFromBasket", cid);
		const match = _.findIndex(state.basket, {cid: cid})
    	console.log("removeFromBasket match", match);
    	// also remove zero index
		if (match || match === 0) {
		    state.basket.splice(match, 1);
		}
    }
  },
  getters: {
  	count: state => state.count,
  	events: state => state.events,
  	basket: state => state.basket,
  	event: state => id => {
  		console.log("GET EVENT BY ID", id);
  		let index = _.findIndex(state.events, (ev) =>{ return ev.eid == id })
  		if (index !== -1) return state.events[index];
  		return {};
  	},
  	basketItems: state => {
		return state.basket.reduce((memo, item) => {
			return memo + item.quantity;
		}, 0)
  	},
  	basketTotal: state => {
		return Math.round(state.basket.reduce((memo, item) => {
			return memo + (item.price * item.quantity);
		}, 0) * 100) / 100
  	},
  	basketTotalBTC: state => {
		return state.basket.reduce((memo, item) => {
			return memo + (item.price * item.quantity);
		}, 0) / state.btcPriceGBP
  	},
  	gbpPriceBTC: state => {
  		return 1 / state.btcPriceGBP
  	},
  	gbpPriceAge: state => state.btcPriceAge,
  	btcPriceGBP: state => state.btcPriceGBP
  },
  actions: {

  }
})

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	console.log("update local storage");
	localStorage.setItem('store', JSON.stringify(state));
});

export default store