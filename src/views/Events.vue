<template>
  

<v-container fluid grid-list-md>
    <v-data-iterator
      :items="events"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
    <template v-slot:item="props">
        <v-flex
          xs12
          sm6
          md4
          lg3
        >
    <EventCard 
    :name="props.item.name"
    :description="props.item.description"></EventCard>
        </v-flex>
        </template>
        </v-data-iterator>
        </v-container>

</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'events',
  components: {
    EventCard
  },
  data(){
    return{
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
      events: [1,2,3,4,5]
    }
  },
  methods:{

  },
  mounted(){
    let instance = this
    this.axios
    .get('/events/')
    .then((res) => {
      instance.events = res.data
    })
  }
}
</script>
