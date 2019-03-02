<template>
  <div class="tickets">
    <h1>UPCOMING EVENTS</h1>
	<Event
		v-for="event in events"
		:location="event.location"
		:date="event.date"
		:time="event.time"
		:tickets="event.tickets"
		:img="event.img"
		:desc="event.desc" />
  </div>
</template>

<script>
	import Event from '@/components/Event.vue'

	export default {
		name: 'tickets',
		components: {
		  Event
		},
		mounted() {
			console.log("start app", this.events);
		},
		data: () => {
			return {
				// @TODO: this will come from the API
			  	events: [
					{
						location: "Brixton",
						date: "20190420",
						time: "10pm",
						tickets: 100,
						img: "https://cdn.venuescanner.com/photos/658e286008d6340dc8ed00431ff2efc2.jpg",
						desc: "The award-winning Academy Theatre was built in 1929 as the flagship of the Astoria Group’s chain of atmospheric variety theatres. It was the first truly atmospheric English theatre where built-up forms were combined with colour and plasterwork to produce the illusion of an auditorium with the atmosphere of the outdoors. The main auditorium contains Europe’s largest fixed stage, framed by an elaborate proscenium arch based on the design of the Rialto Bridge. The venue boasts a magnificent Art Deco interior, with a grand entrance hall and sweeping double stairway in the foyer."
					}
				]
			}
		}
	}

</script>