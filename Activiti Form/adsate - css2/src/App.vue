<template>
  <div id="app">
    <header>
      <nav>
        <a id="logo">Welcome</a>
        <a @click="goPage1()">Load</a>

        <a @click="goPage2()">Edit</a>

        <a @click="goPage3()">Show</a>

        <img id="facebook" src="./img/facebook-circled.png" alt="facebook">
      </nav>
    </header>
    <router-view :personprop="person" @save="save"/>
  </div>
</template>

<script>
import LoadData from "@/components/LoadData";
import SaveData from "@/components/SaveData";
import ShowData from "@/components/ShowData";

export default {
  name: "App",
  data: function() {
    return {
      person: {
        firstname: "Kari",
        lastname: "Nordmann",
        email: "Kari.Nordman@norge.no",
        address: "",
        gender: "",
        purpose: "",
        activities: []
      }
    };
  },
  methods: {
    save: function(fromComponent) {
      this.person.firstname = fromComponent.firstname;
      this.person.lastname = fromComponent.lastname;
      this.person.email = fromComponent.email;
      this.person.address = fromComponent.address;
      this.person.gender = fromComponent.gender;
      this.person.purpose = fromComponent.purpose;
      this.person.activities = fromComponent.activities;
    },
    async goPage1() {
      this.$emit("save", this.person);
      this.$router.push("/");
    },

    async goPage2() {
      this.$emit("save", this.person);
      this.$router.push("SaveData");
    },

    async goPage3() {
      this.$emit("save", this.person);
      this.$router.push("ShowData");
    }
  }
};
</script>

<style>
@import "./style/header.css";
@import "./style/main.css";
@import "./style/menu.css";
</style>
