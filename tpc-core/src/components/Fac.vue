<template>
    <div>
        <v-container>
          <v-breadcrumbs>
              <v-icon slot="divider">chevron_right</v-icon>
              <v-breadcrumbs-item>Faculty Dashboard</v-breadcrumbs-item>
              <v-breadcrumbs-item>Operators</v-breadcrumbs-item>
            </v-breadcrumbs>
          <v-card>
            <v-card-title>
              <span style="font-size: 20px; margin-left: 10px; font-weight: 200;">Operators</span>
              <v-spacer></v-spacer>
              <v-text-field
                append-icon="search"
                label="Search"
                single-line
                hide-details
                v-model="search"
              ></v-text-field>
            </v-card-title>
            <v-data-table
                v-bind:headers="headers"
                v-bind:items="items"
                v-bind:search="search"
                style="margin-down: 50px"
              >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.date }}</td>
                <td class="text-xs-center">{{ props.item.OpAdd }}</td>
                <td class="text-xs-center">{{ props.item.Cert }}</td>
                <td class="text-xs-center">
                  <v-btn @click.native="settings_dialog = true" style="background-color: transparent; margin-left: -20px; margin-right: -20px; box-shadow: none">
                    <v-icon>settings</v-icon>
                  </v-btn>
                </td>
              </template>
              <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                From {{ pageStart }} to {{ pageStop }}
              </template>
            </v-data-table>
            <v-btn color="primary" @click.native="dialog = true" style="box-shadow: none; height: 60px; width: 100%; margin: 0px"><v-icon style="font-size: 21px; padding-right: 5px">playlist_add</v-icon></v-icon>Add Operator</v-btn>
          </v-card>
        </v-container>
        
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline" style="color: #4fa0ca">Give access to a Operator</span>
            </v-card-title>
            <v-card-text style="padding-left: 12.5%; padding-right: 12.5%">
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <label></label>
                    <template>
                      <v-form ref="form" lazy-validation>
                        <v-text-field
                          label="Operator Name"
                          v-model="name"
                          :rules="nameRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Officer Name"
                          v-model="offName"
                          :rules="offNameRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Operator Address"
                          v-model="OpAdd"
                          :rules="OpAddRules"
                          required
                        ></v-text-field>
                      </v-form>
                    </template>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
              <v-spacer></v-spacer>
              <v-btn color="primary" :disabled="!valid" style="box-shadow: none; height: 60px; width: 100%; margin: 0px; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 5px">playlist_add</v-icon></v-icon>Add Operator</v-btn>
          </v-card>
        </v-dialog>
        
        <v-dialog v-model="settings_dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline" style="color: #4fa0ca">Edit this Operator</span>
            </v-card-title>
            <v-card-text style="padding-left: 12.5%; padding-right: 12.5%">
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <label></label>
                    <template>
                      <v-form ref="form" lazy-validation>
                        <v-text-field
                          label="Operator Name"
                          v-model="name"
                          :rules="nameRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Officer Name"
                          v-model="offName"
                          :rules="offNameRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Operator Address"
                          v-model="OpAdd"
                          :rules="OpAddRules"
                          required
                        ></v-text-field>
                      </v-form>
                    </template>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
              <v-spacer></v-spacer>
              <v-btn color="error" style="box-shadow: none; height: 60px; width: 40%; margin: 0px; float: left; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 3px">remove_circle_outline</v-icon></v-icon>Delete Operator</v-btn>
              <v-btn color="primary" :disabled="!valid" style="box-shadow: none; height: 60px; width: 60%; margin: 0px; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 5px">playlist_add_check</v-icon></v-icon>Edit Operator</v-btn>
          </v-card>
        </v-dialog>
    </div>
</template>



<script>
  export default {
    data () {
      return {
        dialog: false,
        settings_dialog: false,
        min1chars: (v) => v.length >= 1 || 'Operator name is missing',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Operator Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Added On', value: 'date', align: 'center' },
          { text: 'Operator Address', value: 'OpAdd', align: 'center' },
          { text: 'Certificates', value: 'Cert', align: 'center' },
          { text: 'Edit', value: 'settings', align: 'center' }
        ],
        items: [
          {
            value: false,
            name: 'Ahmed Mahmoud',
            OpAdd: '0xab0bc903f11446146df74f6e4b0c9i32',
            Cert: 13,
            date: 'Nov 19, 2016' ,
          },
          {
            value: false,
            name: 'Ali khaled',
            OpAdd: '0xab0bc903f11446146df74f6e4b0c9ds8',
            Cert: 2,
            date: 'Nov 13, 2017',
          },
          {
            value: false,
            name: 'Ahmed nagy',
        
            OpAdd: '0xab0bc903f11446146df74f6e4b0c9s7d',
            
            Cert: 13,
            date: 'Apr 9, 2017',
          },
          {
            value: false,
            name: 'Moustafa farghaly',
            
            OpAdd: '0xab0bc903f11446146df74f6e4b0c987s',
            
            Cert: 101,
            date: 'Jan 13, 2016',
          },
          {
            value: false,
            name: 'Nour Haridy',
            
            OpAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            
            Cert: 23,
            date: 'Dec 3, 2015',
          },
                    {
            value: false,
            name: 'Ihab Essam',
            
            OpAdd: '0xab0bc903f11446146df74f6e4b0c9i32',
            
            Cert: 130,
            date: 'Dec 20, 2017',
          }
        ],
          name: '',
          nameRules: [
            (v) => !!v || 'Operator Name is required',
          ],
          offName: '',
          offNameRules: [
            (v) => !!v || 'Officer Name is required',
          ],
          OpAdd: '',
          OpAddRules: [
            (v) => !!v || 'Address is required',
            (v) => /0x.{40}$/.test(v) || 'Address must be valid'
          ]
      }
    },
    computed: {
      valid: function(){
        return (this.nameRules[0](this.name) === true && this.offNameRules[0](this.offName) === true && this.OpAddRules[1](this.OpAdd) === true)
      }
    }
  }
</script>