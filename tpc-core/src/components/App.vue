<template>
  <div id="app">
    <Toolbar v-bind:currView="currView"></Toolbar>
    <Auth v-if="currView === 'auth'"></Auth>
    <Reg v-if="currView === 'auth'"></Reg>
    <Inst v-else-if="currView === 'inst'"></Inst>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import Auth from './Auth.vue'
import Reg from './Reg.vue'
import Inst from './Inst.vue'
export default {
  name: 'app',
  data (){
    return {
      currView: 'auth'
    }
  },
  components:{
    Toolbar, 
    Auth, 
    Reg, 
    Inst
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
