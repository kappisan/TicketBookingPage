import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	count: 0,
	events: [
		{
			location: "Brixton",
			city: "London",
			date: "20190420",
			time: "10pm",
			tickets: 1000,
			img: "https://cdn.venuescanner.com/photos/658e286008d6340dc8ed00431ff2efc2.jpg",
			desc: "The award-winning Academy Theatre was built in 1929 as the flagship of the Astoria Group’s chain of atmospheric variety theatres. The main auditorium contains Europe’s largest fixed stage, framed by an elaborate proscenium arch based on the design of the Rialto Bridge. The venue boasts a magnificent Art Deco interior, with a grand entrance hall and sweeping double stairway in the foyer."
		},
		{
			location: "Cambridge Junction",
			city: "Cambridge",
			date: "20190421",
			time: "9pm",
			tickets: 100,
			img: "https://s3-media3.fl.yelpcdn.com/bphoto/Jz9OdzMlznwjyPQZiwO8sA/o.jpg",
			desc: "At Cambridge Junction, audiences and artists experience and explore contemporary performance, popular culture, creative learning, and the rich territories in-between. We are committed to art and entertainment that is up-and-coming, youthful and cutting-edge.  We seek to be relevant and meaningful to the lives of audiences, and informed by our location in Cambridge."
		},
		{
			location: "The Stand Comedy Club",
			city: "Glasgow",
			date: "20190422",
			time: "9:30pm",
			tickets: 200,
			img: "http://www.eharmony.co.uk/relationship-advice/wp-content/uploads/2014/01/The-Stand-Comedy-Club.jpg",
			desc: "With solo shows from better known performers and prime stand-up every weekend, there’s always something going on at The Stand Comedy Club Glasgow!"
		}
	]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
  	count: state => state.count,
  	events: state => state.events
  },
  actions: {

  }
})
