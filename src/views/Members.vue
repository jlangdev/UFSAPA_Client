<template>
  

<v-container fluid grid-list-md>

    <v-data-iterator
      :items="profiles"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
    <template v-slot:item="props">
        <v-flex
          xs12
          sm6
          md4
          lg2
        >
    <MemberCard 
    :first_name="props.item.first_name"
    :last_name="props.item.last_name"
    :office_hours="props.item.office_hours"
    :image="props.item.image"
    :id="props.item.id"
    ></MemberCard>
        </v-flex>
        </template>
        </v-data-iterator>
        </v-container>

</template>

<script>
// @ is an alias to /src
import MemberCard from '@/components/MemberCard.vue'

export default {
  name: 'members',
  components: {
    MemberCard
  },
  data(){
    return{
      rowsPerPageItems: [12, 24, 48],
      pagination: {
        rowsPerPage: 12
      },
      profiles: [1,2,3,4,5]
    }
  },
  methods:{

  },
  mounted(){
    let instance = this
    this.axios
    .get('/profiles/')
    .then((res) => {
      instance.profiles = res.data.filter(profile => profile.image )
    })
  }
}
</script>
