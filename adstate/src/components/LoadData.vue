<template>
  <div id="wrapper">
    <div id="main">
      <button id="loadDataButton" @click="showData()">Load Data</button>
      <p>First Name:</p>
      <input id="firstName" type="text" v-model="person.firstname">

      <p>Last Name:</p>
      <input id="lastName" type="text" v-model="person.lastname">

      <p>Email:</p>
      <input id="email" type="text" v-model="person.email">
      <br>
      <button id="saveButton" @click="save()">Save</button>
    </div>
    <footer></footer>
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
<style>
@import "../style/menu.css";

#loadDataButton {
  cursor: pointer;
  border: none;
  background: white;
  border-bottom: 1px solid #6b7b8e;
  margin: 0% 20% 5% 30%;
  color: #6b7b8e;
  font-size: 20px;
}

#saveButton {
  cursor: pointer;
  border: none;
  background: white;
  border-bottom: 1px solid #6b7b8e;
  margin-top: 5%;
  margin-right: 40%;
  color: #6b7b8e;
  font-size: 20px;
}
</style>

