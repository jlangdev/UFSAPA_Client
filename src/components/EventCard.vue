<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 8 : 2} clickable`">
      <v-img :src="getImage()"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{name}}</h3>
          <div>{{description}}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <div class="text-xs-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">RSVP</v-btn>
            </template>
            <v-list>
              <v-list-tile v-for="(item, index) in items" :key="index">
                <v-list-tile-title @click="sendAttendence(item.title)">{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
        <v-btn color="secondary" dark @click="getDetails()">Details</v-btn>
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
      items: [{ title: "Going" }, { title: "Not Going" }]
    };
  },
  methods: {
    sendAttendence: function(status) {
      let attendance = {
        user: localStorage.user,
        event: this.id.toString(),
        status: status
      };
      console.log(attendance);
      this.axios.post("/attendance/", attendance).then(res => {
        console.log(res);
      });
    },
    getImage: function() {
      let index = Math.floor(Math.random() * Math.floor(5)) + 1;
      index = index.toString();
      return require(`../assets/meeting1.jpg`);
    },
    getDetails: function() {
      let name = this.name;
      this.$router.push({
        path: `/events/${name}/${this.id}`
      });
    }
  }
};
</script>
