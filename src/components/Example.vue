<template>
  <div>
    <p>{{message}}</p>
    <button class="button" @click="changeMessage()">Change Message</button>
<form action="/action_page.php">
  Message: <input type="text" name="fname" v-model="message"><br>
</form>  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "yak yak yak"
    };
  },
  methods: {
    changeMessage: function() {
      this.message = "changed";
    }
  }
};
</script>


