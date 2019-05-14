<template>
  <div id="wrapper">
    <div id="main">
      <h3>Load your information</h3>
      <button id="loadData" @click="showData()">Load Data</button>
      <br>
      <p>First Name:</p>
      <input id="firstName" type="text" v-model="person.firstname">

      <p>Last Name:</p>
      <input id="lastName" type="text" v-model="person.lastname">

      <p>Email:</p>
      <input id="email" type="text" v-model="person.email">
      <br>
      <button id="saveButton" @click="save()">Save</button>
    </div>
    <footer>
      <img id="facebookFooter" src="../img/facebook-circled.png" alt>
    </footer>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "LoadData",
  props: ["personprop"],
  data() {
    return {
      person: {
        firstname: null,
        lastname: null,
        email: null
      }
    };
  },
  created: function() {
    this.person.firstname = this.personprop.firstname;
    this.person.lastname = this.personprop.lastname;
    this.person.email = this.personprop.email;
  },
  methods: {
    async showData() {
      const url = "https://api.myjson.com/bins/rhfcg";
      const response = await Axios.get(url);
      this.person = response.data;
    },

    async goPage2() {
      this.$emit("save", this.person);
      this.$router.push("SaveData");
    },
    async goPage3() {
      this.$emit("save", this.person);
      this.$router.push("ShowData");
    },

    save(error) {
      alert("Your information has been saved!");
      this.$emit("save", this.person);
    }
  }
};
</script>
<style >
@import "../style/menu.css";
</style>
<style scoped >
h3 {
  margin-left: 35%;
}

@media only screen and (max-width: 600px) {
  h3 {
    margin-left: 15%;
  }
}
</style>

