<template>
<v-container fluid grid-list-md>
  <v-btn 
  @click="getCalendar()"
  id = "calendarView" 
  color = "blue darken-3" 
  class="white--text">Calendar View</v-btn>
  <v-snackbar
      v-model="snackbar"
      timeout="5000"
      top
    >
      RSVP Submitted!
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
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
          lg2
        >
    <EventCard 
    @sent='snack()'
    :name="props.item.name"
    :description="props.item.description"
    :id="props.item.id"></EventCard>
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
      rowsPerPageItems: [6, 12, 24],
      pagination: {
        rowsPerPage: 6
      },
      events: [],
      snackbar: false
    }
  },
  methods:{
    getCalendar: function(){
      let name = this.name
      this.$router.push({
        path: `/calendar`
    })
    },
    snack: function(){
      this.snackbar = true
    }
  },
  mounted(){
    let instance = this;
    this.axios
    .get('/events/')
    .then((res) => {
      instance.events = res.data
    })
  }
}
</script>

<style type="">
  #calendarView{
    font-family: Nunito;
  }
</style>
