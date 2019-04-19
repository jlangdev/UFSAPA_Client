<template>
	<v-layout>
		<v-flex xs12 sm12 lg6 ma-2>
			<h3 class="display-2 font-weight-light mb-2">{{data.name}}</h3>
			<h5  class="headline font-weight-light mb-2">{{data.date}}</h5>
      <h5  class="headline font-weight-light mb-4">{{data.location}}</h5>
			<p class="body-2 font-weight-light">{{data.description}}</p>
		</v-flex>
	</v-layout>

</template>

<script>
  import moment from 'moment'
  export default {
  name: "EventDetails",
  props: {
    id: Number
  },
  data() {
    return {
      data: {}
    };
  },
  methods: {
  },

  mounted() {
    let instance = this;
    let id = this.$route.params.id;
    console.log(id);
    this.axios.get(`/events/${id}`).then(res => {
      instance.data = res.data;
      instance.data.date = moment(res.data.date).format('MM/DD/YYYY h:mm a');
      console.log(instance.data[id]);
    });
  }
};
</script>