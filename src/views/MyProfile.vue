

<template>
  <v-container>
    <!--Img-->
    <v-layout row>
      <v-flex md2 xs12 sm12>
        <v-avatar size="200">
          <img src="../assets/jlang.jpg" alt="profile pic" class="grey lighten-5">
        </v-avatar>
      </v-flex>
      <v-flex md8 xs12 sm12 mt-5>
        <h2 class="font-weight-medium">Name: {{profileData.first_name}} {{profileData.last_name}}</h2>
        <h2 class="font-weight-medium">Birthday: {{profileData.birthday}}</h2>
        <h2 class="font-weight-medium">Total Points: {{profileData.points}}</h2>
        <v-btn color="info">Edit Profile</v-btn>
      </v-flex>
      <!--User Info-->
    </v-layout>
    <v-layout row wrap py-5>
      <v-flex xs12 sm12 md5 ml-3 mb-2>
        <p class="display-1">Personal Information</p>
        <v-card hover class="font-weight-regular">
          <h3>Major 1: {{profileData.major1}}</h3>
          <h3>Major 2: {{profileData.major1}}</h3>
          <h3>Inducted: {{profileData.inducted}}</h3>
          <h3>Years Lefts: {{profileData.years_left}}</h3>
          <h3>Graduation Semester: {{profileData.grad_sem}}</h3>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md5 ml-3>
        <p class="display-1">Individual Information</p>
        <v-card hover>
          <h3>Question 1: {{profileData.question1}}</h3>
          <h3>Question 2: {{profileData.question2}}</h3>
          <h3>Question 3: {{profileData.question3}}</h3>
          <h3>Question 4: {{profileData.question4}}</h3>
          <h3>Question 5: {{profileData.question5}}</h3>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm12 md5 ml-3>
        <h1>Events Attending {{allEventsData}}</h1>
        <h1>All events {{eventsData}}</h1>
      </v-flex>
    </v-layout>
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