<template>
  <div >
 
<div class="info">
  <h2>Info</h2>
</div>
 <div class="img"> 

<img src="../img/undraw_activity_tracker_1l9o.svg" alt="activity">
</div>

    <footer>

    </footer>
  </div>
</template>



import Axios from "axios";

export default {
  name: "LoadData",
  components: {
    svgArt,
  },
  props: ["personprop"],
  data() {
    return {
      person: {

      }
    };
  },
};
</script>
<style >
@import "../style/menu.css";
</style>
<style scoped >

</style>

