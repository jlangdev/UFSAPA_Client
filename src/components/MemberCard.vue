<template>
 <v-hover>
      <v-card
      @click="getDetails()"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 24 : 2} clickable`">
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
 </v-hover>

</template>

<script>

export default {
  name: 'eventcard',
  components:{
  },
  props:{
    office_hours: String,
    image: String,
    first_name: String,
    last_name: String,
    id: Number
  },
  methods:{
    getImage: function(){
      if(this.image){
        return this.image
      }else{
        return 'https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png'
      }
    },
    getDetails: function(){
      let name = this.first_name + this.last_name
      this.$router.push({
        path: `/members/${name}/${this.id}`,
    })
    }
  }
}
</script>
<style>
.clickable {
  cursor: pointer;
}
</style>