// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Toolbar from './components/Toolbar.vue'
import Auth from './components/Auth.vue'
import '../node_modules/vuetify/dist/vuetify.min.css';
import Blockchain from "./js/blockchain.js";

//alert(JSON.stringify(Blockchain.create("12345678")));

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { 
    App
  }
})
