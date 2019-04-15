<template>
  <v-container>
    <!--Img-->
    <v-layout row>
      <v-flex md2 xs12 sm12>
        <v-btn color="primary" dark>
          <router-link to="/profile" tag="v-btn">Back</router-link>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex mx-auto mt-5 md3 xs6 sm6>
        <p class="display-1" align-center>Attendance Passcode</p>
        <div class="text-xs-center">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="code"
              :counter="10"
              :rules="nameRules"
              label="Enter Code"
              required
            ></v-text-field>
            <v-btn :disabled="!valid" color="success" @click="validate">Submit</v-btn>
          </v-form>
        </div>
      </v-flex>
    </v-layout>
    <!--User Info-->
  </v-container>
</template>

<script>
export default {
  name: "myProfile",
  components: {},
  data() {
    return {
      profileData: {},
      userData: {},
      eventsData: {},
      allEventsData: {},
      editToggle: false,
      code: '',
      eventId: '',
      userId: '',
    };
  },
  methods: {
    enableEdit: function() {},
    validate: function(){
    let userId = localStorage.user;
    let eventId = this.$route.params.id;
    let passcode = this.code;

    let model = new FormData();
    model.append('user_id', userId);
    model.append('event_id', eventId);
    model.append('passcode', passcode)

    this.axios.post(`/passcode/`, model).then(res => {
      console.log(res)
    });
    }
  },
  
};
</script>