<template>
  <div id="app">
    <Toolbar></Toolbar>
    <Auth></Auth>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Auth from './components/Auth.vue'
export default {
  name: 'app',
  components:{
    Toolbar, 
    Auth
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
