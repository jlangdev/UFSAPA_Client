

<template>
  <v-layout py-5>
    <v-flex xs12 sm6 offset-sm3>
      <p v-for = "(value,key) in profileData"></p>
    </v-flex>
  </v-layout>
</template>




  

<script>

export default {
  name: 'myProfile',
  components: {
    
  },
  data(){
    return{
    	profileData:{},
    	userData:{},
    	editToggle:false
    }
  },
  methods:{

  },
  mounted(){
  	let instance = this;
  	let profileId = localStorage.profile;
  	let userId = localStorage.user;

  	this.axios.get(`/profiles/${profileId}/`).then(res => {
  		instance.profileData = res.data;
  	});
  	this.axios.get(`/users/${userId}/`).then(res => {
  		instance.userData = res.data;
  	})

  }
}
</script>