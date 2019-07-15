<template>
  <div class="home">
     <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
<HelloWorld/>
    </div>
    <div class="section">
      <About/>
    </div>
     <div class="section">
      3 section ...
    </div>
  </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import About from './About'

export default {
  name: 'home',
  components: {
  HelloWorld,
   About
  },
   data() {
    return {
      options: {
        menu: '#menu',
        licensKey: 'YOUR_KEY_HERE',
        anchors: ['Home', 'HelloWorld', 'About'],
        sectionsColor: ['#faa536', '#f47828', '#bdce30']
      },
}},
}
</script>
