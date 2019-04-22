<template>
  <v-layout>
    <v-flex xs12 sm12 lg6 ma-2>
     
      <v-card>
          
        <!-- <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{data.first_name}} {{data.last_name}}</h3>
            <div>Major(s): {{data.major1}} <span v-if="data.major2"> & {{data.major2}}</span></div>
            <div>Office hours: {{data.office_hours}}</div>
          </div>
        </v-card-title> -->
        <v-img :src="getImage()" max-height=500></v-img>
        
      </v-card>
    </v-flex>
    <v-flex xs12 sm12 lg6 ml-5>
      <h1 class="display-3 font-weight-light mb-3"> About {{data.first_name}}</h1>
      
            <!-- <h3 class="headline mb-0">{{data.first_name}} {{data.last_name}}</h3> -->
        <div class="title font-weight-light" ><span class = "title font-weight-medium" >Major(s):</span> {{data.major1}} <span ml-5 v-if="data.major2"> & {{data.major2}}</span></div>
        <div ml-5 class="title font-weight-light mt-3 mb-5"><span class = "title font-weight-medium">Office hours: </span> {{data.office_hours}}</div>
      <div class="title font-weight-medium">
        What did you study and why?
      </div>
      <blockquote class="blockquote">{{data.question1}}</blockquote>
       <div class="title font-weight-medium">
        Where else have you traveled (2+ weeks)?
      </div>
      <blockquote class="blockquote">{{data.question2}}</blockquote>
       <div class="title font-weight-medium">
        What was one of the biggest challenges you faced while abroad?
      </div>
      <blockquote class="blockquote">{{data.question3}}</blockquote>
       <div class="title font-weight-medium">
        Do you have any advice for students looking to study abroad?
      </div>
      <blockquote class="blockquote">{{data.question4}}</blockquote>
       <div class="title font-weight-medium">
        What was an interesting experience you had while abroad?
      </div>
      <blockquote class="blockquote">{{data.question5}}</blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "MemberDetails",
  props: {
    id: Number
  },
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getImage: function() {
      if (this.data.image) {
        return this.data.image;
      } else {
        return "https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png";
      }
    }
  },

  mounted() {
    let instance = this;
    let id = this.$route.params.id;
    console.log(id);
    this.axios.get(`/profiles/${id}/`).then(res => {
      instance.data = res.data;
    });
  }
};
</script>