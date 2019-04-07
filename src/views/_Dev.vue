<template>
  <div>
    <v-layout>
      <v-flex xs12 sm12 lg6 ma-2>
        <!--replace with vuetify's headers/titles -->
        <h1>column 1</h1>
        <h2>Attendance Data:</h2>

        <!-- v-for (ng-repeat) -->
        <ul v-for="record in attendanceData" >
          <li>Event: {{record.event}}</li>
          <li>User: {{record.user}}</li>
          <li>Status: {{record.status}}</li>
        </ul>

      </v-flex>
      <v-flex xs12 sm12 lg6 ma-2>
        <!--replace with vuetify's headers/titles -->
        <h1>column 2</h1>
        <h2>Create New:</h2>

        <!--Display the current model, the data we intend to POST to api/attendence -->
        <h3>Current Model:</h3>
				<ul>
          <li>Event: {{attendanceModel.event}}</li>
          <li>User: {{attendanceModel.user}}</li>
          <li>Status: {{attendanceModel.status}}</li>
        </ul>
        <v-form>
          <v-text-field
            v-model="attendanceModel.event"
            prepend-icon="schedule"
            name="event"
            label="Event"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="attendanceModel.user"
            prepend-icon="person"
            name="user"
            label="User"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="attendanceModel.status"
            prepend-icon="check"
            name="status"
            label="Status"
            type="text"
          ></v-text-field>
        </v-form>
				  <v-btn color="orange" @click="sendAttendance()">Send</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Dev",
  components: {},
  data() {
    return {
      attendanceData: [],
      attendanceModel: {
        event: "",
        user: "",
        status: ""
      }
    };
  },
  methods: {
		sendAttendance: function(){
			let model = this.attendanceModel;
			let instance = this;
			this.axios.post("/attendance/", model).then(res=>{
				console.log(res)
			})
		}
	},
  mounted() {
    let instance = this;
    this.axios.get("/attendance/").then(res => {
			instance.attendanceData = res.data;
		});
		

  }
};
</script>
