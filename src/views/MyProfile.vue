

<template>
  <v-container>
    <!--Img-->
    <v-layout row>
      <v-flex md4 xs12 sm12>
        <v-avatar size="200">
          <img src="../assets/jlang.jpg" alt="profile pic" class="grey lighten-5">
        </v-avatar>
      </v-flex>
      <v-flex md8 xs12 sm12 mt-5>
        <h2 class="font-weight-medium">Name: {{profileData.first_name}} {{profileData.last_name}}</h2>
        <h2 class="font-weight-medium">Birthday: {{profileData.birthday}}</h2>
        <h2 class="font-weight-medium">Total Points: {{profileData.points}}</h2>
        <v-btn color="info">
          <router-link to="/editprofile" tag="v-btn">Edit Profile</router-link>
        </v-btn>
      </v-flex>
      <!--User Info-->
    </v-layout>
    <v-layout row wrap py-5>
      <v-flex xs12 sm12 md5 ml-3 mb-2>
        <p class="display-1">Personal Information</p>
        <v-card hover class="font-weight-regular">
          <h3>Major: {{profileData.major1}}</h3>
          <h3>Minor: {{profileData.minor1}}</h3>
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
      <v-flex xs6 sm6 md4 ml-3>
        <p class="display-1">Events Attending</p>

        <div v-for="(event, key) in myEvents" :key="key">
          <div v-if="event.is_active === true">
            <v-card color="#577284" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{event.name}}</div>
                  <br>
                  <span>Descripion: {{event.description}}</span>
                  <br>
                  <span>Date: {{event.date.toLocaleString()}}</span>
                  <br>
                  <span>Point Value: {{event.point_value}}</span>
                  <br>
                  <span>Mandatory: {{event.is_mandatory}}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn color="primary" dark>
                  <router-link :to="getLink(event.id)" tag="v-btn">Enter Passcode</router-link>
                </v-btn>
                <v-btn color="error" dark>Not Attending</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
        <!-- <h1>All events {{eventsData}}</h1>-->
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
      attendance: {},
      events: {},
      myEvents: [],
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
    enableEdit: function() {},
    getLink: function(id) {
      return `/passcode/${id}`;
    }
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
    this.axios.get(`/attendance/user/${userId}/`).then(res => {
      instance.attendance = res.data;
      instance.axios.get(`/events/`).then(res => {
        instance.events = res.data;
        for (let i = 0; i < instance.events.length; i++) {
          for (let j = 0; j < instance.attendance.length; j++) {
            if (instance.events[i].id == instance.attendance[j].event) {
              instance.myEvents.push(instance.events[i]);
              continue;
            }
          }
        }
      });
    });
  }
};
</script>