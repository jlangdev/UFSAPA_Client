

<template>
  <v-layout py-5>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="card_image"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Study Abroad Peer Advisors at the University of Florida</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

    
      </v-card>
    </v-flex>
  </v-layout>
</template>




  

<script>

export default {
  name: 'about',
  components: {
    
  },
  data(){
    return{
      card_text: "The Study Abroad Peer Advisor (SAPA) organization is a group of students who have previously studied abroad and are now dedicated to sharing their experiences with other students. We assist students interested in learning more about UF’s study abroad opportunities by matching them with students who have studied on similar programs/locations, or who share similar academic interests. Come to the International Center and talk to us or reach out any time. We would love to talk with you! The office hours posted are when our SAPAs can be seen in person in the Study Abroad Services lobby in the International Center.",
      card_image: "http://i.imgur.com/hudVrT1.jpg"

    }
  },
  methods:{

  }
}
</script>