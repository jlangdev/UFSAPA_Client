<template>
  <v-layout wrap>
    <v-flex sm4 xs12 class="text-sm-left text-xs-center">
      <v-btn @click="$refs.calendar.prev()">
        <v-icon dark left>
          keyboard_arrow_left
        </v-icon>
        Prev
      </v-btn>
       <v-btn @click="$refs.calendar.next()">
        Next
        <v-icon right dark>
          keyboard_arrow_right
        </v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12 class="mb-3">
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          v-model="start"
          :type="type"
          :end="end"
          color="primary"
        >
          <template v-slot:day="{ date }">
            <template v-for="event in eventsMap[date]">
              <v-menu
                :key="event.name"
                v-model="event.open"
                full-width
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="my-event"
                    v-on="on"
                    v-html="event.name"
                  ></div>
                </template>
                <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar color="primary" dark>
                    <v-toolbar-title v-html="event.name">
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-card-title primary-title style="display: block;">
                    <p v-html="event.description" ></p>
                    <p >Location:
                      <span v-html="event.location"></span>
                    </p>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="secondary">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>  
  </v-layout>
</template>

<script>
import moment from 'moment'
  export default {
    data: () => ({
      type: 'month',
      start: '2019-01-01',
      end: '2019-01-06',
      data: {},
      today: '2019-01-08',
      events : [],
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {};
        this.events.forEach(function(element) {
          element.date = moment(element.date).format('YYYY[-]MM[-]DD');
          (map[element.date] = map[element.date] || []).push(element);
        });
        // console.log(map);
        return map
      }
    },
    methods: {
      open (event) {
        alert(event.title)
      }
    },
    mounted() {
    let instance = this;
    this.axios.get(`/events/`).then(res => {
      instance.data = res.data;
      instance.events = res.data;
      instance.data.date = moment(res.data.date).format('MM/DD/YYYY h:mm a');
    });
  }
  }
</script>


<style lang="stylus" scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>