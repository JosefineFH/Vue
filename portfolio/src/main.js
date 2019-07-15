import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')