<template>
  <div class="tickets">
    <h1>UPCOMING EVENTS</h1>
	<Event
		v-for="event in events"
		:location="event.location"
		:date="event.date"
		:city="event.city"
		:time="event.time"
		:tickets="event.tickets"
		:img="event.img"
		:desc="event.desc" />
  </div>
</template>

<script>
	import Event from '@/components/Event.vue';
	import { mapGetters, mapMutations } from 'vuex';

	import { store } from '../store.js';

	export default {
		name: 'tickets',
		components: {
		  Event
		},
		computed: {
			...mapGetters(['events'])
		},
		mounted() {
			console.log("start app", this.events);
		}
	}

</script>