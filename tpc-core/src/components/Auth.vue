<template>
    <div>
        <v-flex style="margin-left: auto; margin-right: auto; margin-top: 70px; max-width: 530px">
          <v-card color="grey lighten-4" style="padding-top: 45px; padding-bottom: 5px; color: #4fa0ca">
            <v-alert v-if="error" color="error" icon="warning" value="true" style="margin-top: -45px">
              Error: please make sure you upload a valid identity file and enter the correct decryption password
            </v-alert>
            <img src="../assets/logo.svg" width="140px" style="margin: 25px">
            <div style="text-align: center; margin-bottom: 30px; font-size: 16px; font-weight: 600">You need a registered identity to authenticate.<br/> <span style="color: grey; font-size: 15px; font-weight: 300">Please create an identity and ask your operator to register you.</span></div>
            <form style="padding-left: 10%; padding-right: 15%; border-top: 1px #e2e2e2 solid">
                  <v-text-field
                  prepend-icon="attach_file" single-line
                  v-model="filename" :label="label"
                  @click.native="onFocus"
                  :disabled="disabled"
                  :rules="[v => !!v || 'Identity file is required!']"
                  ref="fileTextField"
                  required
                  ></v-text-field>
                  <input type="file" :accept="accept" :multiple="false" :disabled="disabled" ref="fileInput" @change="onFileChange"></input>
                  <v-text-field
                    v-model="password"
                    prepend-icon="lock" single-line
                    name="input-10-1"
                    label="Enter your password"
                    hint="At least 8 characters"
                    min="8"
                    :append-icon="passBol ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (passBol = !passBol)"
                    :type="passBol ? 'password' : 'text'"
                    counter
                    required
                  ></v-text-field>
                <v-btn :disabled="!valid" style="height: 50px; background-color: #4fa0ca; color: white; box-shadow: none" v-on:click="authenticate">
                    <v-icon style="font-size: 20px; padding-right: 5px">vpn_key</v-icon>Authenticate
                </v-btn>
            </form>
          </v-card>
        </v-flex>
    </div>
</template>



<script>
    export default{
        props: {
            value: {
                type: [Array, String]
            },
            label: {
                type: String,
                default: "Select an identity file.."
            },
            accept: {
                type: String,
                default: ".json"
            },
            required: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean, // not yet possible because of data
                default: false
            }
        },
        data(){
            return {
                filename: "",
                passBol: true,
                password: '',
                json:"",
                ready:true,
                error:false
            };
        },
        watch: {
            value(v){
                this.filename = v;
            }
        },
        mounted() {
            this.filename = this.value;
        },

        methods: {
            onFocus(){
                if (!this.disabled) {
                    debugger;
                    this.$refs.fileInput.click();
                }
            },
            onFileChange($event){
                const files = $event.target.files || $event.dataTransfer.files;
                if (files) {
                    if (files.length > 0) {
                        this.filename = [...files].map(file => file.name).join(', ');
                    } else {
                        this.filename = null;
                    }
                } else {
                    this.filename = $event.target.value.split('\\').pop();
                }
                var reader = new FileReader();
                reader.readAsText(files[0], "UTF-8");
                var self = this;
                reader.onload = (function(file){
                    return function(e){
                    self.json = e.target.result;
                    alert(e.target.result);   
                    }
                })(files[0]);
            },
            authenticate(){
                this.ready = false;
                var wallet = Blockchain.decrypt(JSON.parse(this.json), this.password);
                if(wallet != false){
                    alert(JSON.stringify(wallet))
                }else{
                    this.error = true
                }
                this.ready = true;
            }
        },
        computed: {
            valid: function () {
              return (this.json != "" && this.password.length > 7)
            }
        }
    };
</script>


<style scoped>
    input[type=file] {
        position: absolute;
        left: -99999px;
    }
</style>