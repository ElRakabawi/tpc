<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline" style="color: #4fa0ca">Create an Identity</span>
        </v-card-title>
        <v-card-text style="padding-left: 12.5%; padding-right: 12.5%">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <label></label>
                <v-text-field
                  v-model="password"
                  prepend-icon="lock" single-line
                  name="input-10-1"
                  label="Choose a new password"
                  hint="At least 8 characters"
                  min="8"
                  :append-icon="passBol ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (passBol = !passBol)"
                  :type="passBol ? 'password' : 'text'"
                  counter
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
          <v-spacer></v-spacer>
          <v-btn :disabled="!valid" color="primary" style="box-shadow: none; height: 60px; width: 100%; margin: 0px"><v-icon style="font-size: 21px; padding-right: 5px">vpn_key</v-icon></v-icon>Generate Identity file</v-btn>
      </v-card>
    </v-dialog>
    
    
    <v-toolbar style="background-color: #4fa0ca; color: white">
      <img src="../assets/icon.svg" height="34px" style="margin-right: -15px; margin-left: 10%; margin-top: 5px; cursor: pointer"></img>
      <v-toolbar-title v-on:click="$router.push('/')" style="font-size: 18px">Tamper-Proof Certification</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="currView === 'auth'" flat color="white" class="create_btn" @click.stop="dialog = true">
        <v-icon style="margin-right: 3px">fingerprint</v-icon>Create Identity
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    props:["currView"],
    data () {
      return {
        dialog: false,
        passBol: true,
        password: ''
      }
    },
    computed: {
      valid: function () {
        return(this.password.length > 7)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
