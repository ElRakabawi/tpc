import Vue from 'vue'
import App from './components/App.vue'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css';
import "./js/blockchain.js";

Vue.use(Vuetify, {
  theme: {
    primary: '#4FA0CA',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:"v-app",
  components: {
    App
  }
})
