<script>
import EventCard from '../components/EventCard.vue'
import {useEventStore} from "../stores/EventStore";
import {useUserStore} from "../stores/useUserStore";

export default {
  setup() {
    const eventStore = useEventStore();
    const userStore = useUserStore();

    return {
      eventStore,
      userStore
    }
  },
  components: {
    EventCard
  },
  created() {
    this.eventStore.fetchEvents().catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
}
</script>

<template>
  <h1>{{eventStore.numberOfEvents }} Events for {{ userStore.userFirstName }}</h1>
  <div class="events">
    <EventCard v-for="event in eventStore.events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
