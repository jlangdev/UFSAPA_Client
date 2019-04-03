<template>
  <section>
      <div class="columns is-mobile is-centered">
    <div class="column is-half">
    <EventCard></EventCard>
    </div>
  </div>
  </section>

</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'events',
  components: {
    EventCard
  }
}
</script>
