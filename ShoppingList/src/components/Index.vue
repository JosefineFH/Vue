<template>
  <div class="shopping-list">
  <h1>Hi Vue!</h1>
  <h2>{{ header}}</h2>
  <input type="text" v-model="header">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      header: 'Vue is ready to Pary!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
