<template>
  <div id="app">
    <Toolbar v-bind:currView="currView"></Toolbar>
      <v-btn color="primary" class="create_btn" @click="currView = 'auth'">
        Authentication
      </v-btn>
      <v-btn color="primary" class="create_btn" @click="currView = 'reg'">
        Regulator
      </v-btn>
      <v-btn color="primary" class="create_btn" @click="currView = 'inst'">
        Institution
      </v-btn>
      <v-btn color="primary" class="create_btn" @click="currView = 'fac'">
        Faculty
      </v-btn>
    <Auth v-if="currView === 'auth'"></Auth>
    <Reg v-else-if="currView === 'reg'"></Reg>
    <Inst v-else-if="currView === 'inst'"></Inst>
    <Fac v-else-if="currView === 'fac'"></Fac>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import Auth from './Auth.vue'
import Reg from './Reg.vue'
import Inst from './Inst.vue'
import Fac from './Fac.vue'
export default {
  name: 'app',
  data (){
    return {
      currView: 'inst',
      reg:"",
      inst:"", 
      fac:"",
      auth:""
    }
  },
  components:{
    Toolbar, 
    Auth, 
    Reg, 
    Inst,
    Fac
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', cursive;
  text-align: center;
  color: white;
}
</style>
