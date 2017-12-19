import Vue from 'vue'
import App from './components/App.vue'
import router from './js/router.js'
import Vuetify from 'vuetify'
import Toolbar from './components/Toolbar.vue'
import Auth from './components/Auth.vue'
import '../node_modules/vuetify/dist/vuetify.min.css';
import "./js/blockchain.js";

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:"v-app",
  router,
  components: {
    App
  }
})
