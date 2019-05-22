<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>test</v-flex>

      <v-flex mb-4>MB-4</v-flex>

      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">mb-5 xs12</h2>

        <v-layout justify-center></v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">xs12 mb-5</h2>

        <v-layout justify-center></v-layout>
      </v-flex>

      <v-flex xs12 mb-5>
        <h2 class="headline font-weight-bold mb-3">xs12 mb-5</h2>

        <v-layout justify-center></v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ecosystem: []
  })
};
</script>

<style>
#app {
  color: #f4f2f0;
}
</style>
