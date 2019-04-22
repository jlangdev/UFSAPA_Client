<template>
  <v-container align-center justify-center>
    <h1 class="display-2">Edit Profile</h1>
    <p class="subheading">Click the checkbox and submit when everything is complete.</p>
    <v-layout></v-layout>
    <v-flex m6 s8 xs8>
      <form id="editForm">
        <!--Major-->
        <v-text-field v-model="major1" id="major1" :counter="20" label="Major 1"></v-text-field>
        <!--Major 2-->
        <v-text-field v-model="major2" id="major2" :counter="20" label="Major 2 (If applicable)"></v-text-field>
        <!--Minor 1-->
        <v-text-field v-model="minor1" id="minor1" :counter="15" label="Minor 1 (If applicable)"></v-text-field>
        <!--Minor 2-->
        <v-text-field v-model="minor2" id="minor2" :counter="15" label="Minor 2 (If applicable)"></v-text-field>
        <!--Office Hours-->
        <v-text-field v-model="officehours" id="officehours" :counter="100" label="Office Hours"></v-text-field>
        <!--Question 1-->
        <v-text-field v-model="question1" id="question1" :counter="100" label="Question 1"></v-text-field>
        <!--Question 2-->
        <v-text-field v-model="question2" id="question2" :counter="100" label="Question 2"></v-text-field>
        <!--Question 3-->
        <v-text-field v-model="question3" id="question3" :counter="100" label="Question 3"></v-text-field>
        <!--Question 4-->
        <v-text-field v-model="question4" id="question4" :counter="100" label="Question 4"></v-text-field>
        <!--Question 5-->
        <v-text-field v-model="question5" id="question5" :counter="100" label="Question 5"></v-text-field>
        <!--Office Hours-->

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
    </v-flex>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    major1: "",
    major2: "",
    minor1: "",
    minor2: "",
    officehours: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    name: "",
    checkbox: false
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    }
  },

  methods: {
    clear() {
      this.$v.$reset();
      this.major1 = "";
      this.major2 = "";
      this.minor1 = "";
      this.minor2 = "";
      this.question1 = "";
      this.question2 = "";
      this.question3 = "";
      this.question4 = "";
      this.question5 = "";
      this.officehours = "";
      this.checkbox = false;
    },
    submit() {
      this.$v.$touch();
      if (this.checkbox == false) {
        return;
      }
      let instance = this;
      let userId = localStorage.user;
      let profileId = localStorage.profile;
      var elements = document.getElementById("editForm").elements;

      for (var i = 0, element; (element = elements[i++]); ) {
        var holdData;
        var myJSON;
        if (element.type === "text" && element.value != "") {
          holdData = {};
          holdData[element.id] = element.value.toString();
          myJSON = JSON.stringify(holdData);

          console.log(myJSON);
        }
      }

      this.axios.patch(`/profiles/${profileId}/`, { myJSON }).then(res => {
        this.clear();
      });
    }
  }
};
</script>
<!--
<script>
export default {
  name: "myProfile",
  components: {},
  data() {
    return {
      profileData: {},
      userData: {},
      attendance: {},
      events: {},
      myEvents: [],
      name: "",
      email: "",
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,

      editToggle: false
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  },
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
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
</script>-->
