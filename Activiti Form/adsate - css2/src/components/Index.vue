<template>
  <div class="grid-container" >
 <div class="grid-img"> 

<img class="svgImage" src="../img/undraw_activity_tracker_1l9o.svg" alt="activity">
</div> 
<div class="grid-info">
  <h1>Welcome to Girl Camp</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est quasi animi rerum maiores nobis hic, a odio cum fuga aut molestiae, ipsam quibusdam iste debitis ducimus, officia earum accusantium.</p>
<button @click="goPage1()">REGISTER</button>
</div>

    <div class="footer">
<p>Contackt:</p>
    </div>
  </div>
</template>

<script>

import Axios from "axios";

export default {
  methods: {
    async goPage1() {
      this.$router.push("LoadData");
    },
  }
};
</script>
<style >
@import "../style/menu.css";
</style>

<style scoped >

button{
  border: none;
  width: 250px;
  font-size: 19px;
  border-radius: 2px;
  padding: 10px;

}
.grid-container{
  display: grid;
   grid-template-columns: auto  600px;
  grid-gap: 10px;
}
.grid-info{
  color: aliceblue;
  grid-column: 3;
  grid-row: 1 / span 2;
  padding-right: 20px;
}
.grid-img{
  grid-column: 1 / span 2;
  grid-row: 1;
}
.svgImage{
  padding: 50px;
  width: 90%;
}
  .footer
  {
    grid-column: 1 / span 3;
    grid-row: 2;
    color: aliceblue;
    border: solid 1px white;
    width: 100%;
    padding-left: 10px;
  }
</style>

