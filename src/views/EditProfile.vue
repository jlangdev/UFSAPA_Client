
<template>
  <v-containter>
    <h4 class="display-1">Edit Profile</h4>
    <p class="subheading">Click "Do you agree?" to confirm that all changes are ok</p>
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="20"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="20"
        label="Major 1"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Major2"
        :error-messages="nameErrors"
        :counter="20"
        label="Major 2: if applicable"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Minor1"
        :error-messages="nameErrors"
        :counter="20"
        label="Minor 1: if applicable"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Minor2"
        :error-messages="nameErrors"
        :counter="20"
        label="Minor 2: if applicable "
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Question1"
        :error-messages="nameErrors"
        :counter="100"
        label="Question1"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Question2"
        :error-messages="nameErrors"
        :counter="100"
        label="Question 2"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Question3"
        :error-messages="nameErrors"
        :counter="100"
        label="Question 3"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Question4"
        :error-messages="nameErrors"
        :counter="100"
        label="Question 4"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Question5"
        :error-messages="nameErrors"
        :counter="100"
        label="Question 5"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-containter>
</template>

<script >
  
</script>
