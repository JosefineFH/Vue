<template>
  <div id="app">
    <header>
      <div class="header__bg"></div>
      <div class="menu">
        <li>
          <a @click="goPage1()">Load</a>
        </li>
        <li>
          <a @click="goPage2()">Edit</a>
        </li>
        <li>
          <a @click="goPage3()">Show</a>
        </li>
      </div>
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

@media only screen and (max-width: 600px) {
  #main {
    margin-left: 10%;
  }
}

* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  color: #2c3e50;
}

#main {
  padding-right: 10px;
  margin-left: 5%;
  height: 100%;
  top: 0;
}

#goPage {
  cursor: pointer;
  position: static;
  left: 0;
  width: 113px;
  max-width: 150px;
  border: none;
  background: white;
  border-bottom: 1px solid #2c3e50;
  padding-top: 20%;
  color: #2c3e50;
  font-size: 15px;
}
footer {
  margin-bottom: 10%;
}
</style>
