<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 8 : 2} clickable`">

      <v-img aspect-ratio="1" :src="getImage()"></v-img >

     <!--  <div id = "tName">
          <h3 class="headline mb-0">{{name}} </h3>
        </div> -->

      <v-card-title primary-title size="100%"  >
        <div id = "tName">
          <h3 class="headline mb-0">{{name}} </h3>
        </div>
      </v-card-title>

      <v-card-text>
        <div id = "desc">{{description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-container>
          
          <v-flex lg6 sm6>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn color="red lighten-1 " dark v-on="on">RSVP</v-btn>
              </template>
              <v-list>
                <v-list-tile v-for="(item, index) in items" :key="index">
                  <v-list-tile-title @click="sendAttendence(item.title)">{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-flex>

          <v-flex lg6 sm6>
            <v-btn color="brown darken-2" dark @click="getDetails()">Details</v-btn>
          </v-flex>
        </v-container>
      </v-card-actions>

    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "eventcard",
  props: {
    name: String,
    date: Date,
    description: String,
    category: String,
    point_value: Number,
    is_mandatory: Boolean,
    id: Number
  },
  data() {
    return {
      items: [{ title: "Going" }, { title: "Not Going" }],
      index: ""
    };
  },
  methods: {
    sendAttendence: function(status) {
      let attendance = {
        user: localStorage.user,
        event: this.id.toString(),
        status: status
      };
      let instance = this
      this.axios.post("/attendance/", attendance).then(res => {
        instance.$emit('sent')
        
      });
    },
    getImage: function() {
      return require(`../assets/meeting${this.index}.jpg`);
    },
    getDetails: function() {
      let name = this.name;
      this.$router.push({
        path: `/events/${name}/${this.id}`
      });
    }
  },
  mounted() {
    this.index = (Math.floor(Math.random() * Math.floor(5)) + 1).toString();
  }
};
</script>

<style>
  #desc{
    overflow: hidden;
    max-height: 20px;
    text-overflow: ellipsis; 
  }
  #tName{
    height: 30px;
    text-overflow: ellipsis; 
    margin-bottom: 1em;
    /*overflow: hidden;*/
    /*white-space: nowrap; */
    /*display: block;*/
  }
</style>
