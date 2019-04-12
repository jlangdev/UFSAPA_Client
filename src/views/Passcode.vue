

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
              v-model="name"
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
      map: {
        id: "id",
        first_name: "First Name",
        last_name: "Last Name",
        major1: "Major 1",
        major2: "Major 2",
        minor1: "Minor 1",
        minor2: "Minor 2",
        grad_sem: "Grad Semester ",
        years_left: "Years Left",
        inducted: "Inducted",
        birthday: "Birthday",
        image: "image",
        office_hours: "office hours",
        points: "Points",
        question1: "Question 1",
        question2: "Question 2",
        question3: "Question 3",
        question4: "Question 4",
        question5: "Question 5",
        user: "User"
      },
      editToggle: false
    };
  },
  methods: {
    enableEdit: function() {}
  },
  mounted() {
    let instance = this;
    let profileId = localStorage.profile;
    let userId = localStorage.user;

    this.axios.get(`/profiles/${profileId}/`).then(res => {
      instance.profileData = res.data;
    });
    this.axios.get(`/users/${userId}/`).then(res => {
      instance.userData = res.data;
    });
    this.axios.get(`/attendance/${userId}/`).then(res => {
      instance.eventsData = res.data;
    });
    this.axios.get(`/events/`).then(res => {
      instance.allEventsData = res.data;
    });
  }
};
</script>