<template>
  <div id="app">
    <header>
      <nav>
        <a id="logo" @click="indexPage()">Girl Camp</a>
        <a @click="indexPage()">HOME</a>
                <a @click="OurActivitys()">OUT ACTIVITYS</a>
        <a @click="goPage1()">REGISTER</a>

        <a @click="goPage2()">ACTIVITY</a>

        <a @click="goPage3()">ORDER</a>
      </nav>
    </header>
    <router-view :personprop="person" @save="save"/>
  </div>
</template>

<script>
import Register from "@/components/Register";
import Activity from "@/components/Activity";
import Order from "@/components/Order";
import OurActivitys from "@/components/OurActivitys";

export default {
  name: "App",
  data: function() {
    return {
      person: {
        firstname: "",
        lastname: "",
        email: "",
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
    async indexPage(){
       this.$emit("save", this.person);
      this.$router.push("/");
    },

    async OurActivitys(){
      this.$emit("save", this.person);
      this.$router.push("OurActivitys");
    },
    
    async goPage1() {
      this.$emit("save", this.person);
      this.$router.push("Register");
    },


    async goPage2() {
      this.$emit("save", this.person);
      this.$router.push("Activity");
    },

    async goPage3() {
      this.$emit("save", this.person);
      this.$router.push("Order");
    }
  }
};
</script>

<style>
@import "./style/main.css";
@import "./style/menu.css";
</style>
