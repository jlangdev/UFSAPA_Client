

<template>
  <v-layout py-5>
    <v-flex xs12 sm6 offset-sm3>
      <ul v-for="(value,key) in profileData">
        <li>{{map[key]}} {{value}}</li>
      </ul>
    </v-flex>
  </v-layout>
</template>




  

<script>
export default {
  name: "myProfile",
  components: {},
  data() {
    return {
      profileData: {},
      userData: {},
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
        years_left: "Years Left",
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
  }
};
</script>