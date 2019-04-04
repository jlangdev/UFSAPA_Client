<template>

      <v-card>
     <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{name}}</h3>
            <div> {{description}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">RSVP</v-btn>
        </v-card-actions>
      </v-card>

</template>

<script>

export default {
  name: 'eventcard',
  props:{
    name: String,
    date: Date,
    description: String,
    category: String,
    point_value: Number,
    is_mandatory: Boolean
  }
}
</script>
