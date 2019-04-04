<template>

      <v-card>
        <v-img
          :src="getImage()"
        ></v-img>
     <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{first_name}} {{last_name}}</h3>
            <div>Office hours: {{office_hours}}</div>
          </div>
        </v-card-title>

        
      </v-card>

</template>

<script>

export default {
  name: 'eventcard',
  props:{
    office_hours: String,
    image: String,
    first_name: String,
    last_name: String
  },
  methods:{
    getImage: function(){
      if(this.image){
      return this.image
      }else{
        return 'https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png'
      }
    }
  }
}
</script>