<template>
    <div>
        <v-container>
          <v-breadcrumbs>
              <v-icon slot="divider">chevron_right</v-icon>
              <v-breadcrumbs-item>Regulator Dashboard</v-breadcrumbs-item>
              <v-breadcrumbs-item>Institutions</v-breadcrumbs-item>
            </v-breadcrumbs>
          <v-card>
            <v-card-title>
              <span style="font-size: 20px; margin-left: 10px; font-weight: 200;">Institutions</span>
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
                <td class="text-xs-center">{{ props.item.offName }}</td>
                <td class="text-xs-center">{{ props.item.instAdd }}</td>
                <td class="text-xs-center">{{ props.item.fac }}</td>
                <td class="text-xs-center">
                  <v-btn @click.native="settings_dialog = true" style="background-color: transparent; margin-left: -20px; margin-right: -20px; box-shadow: none">
                    <v-icon>settings</v-icon>
                  </v-btn>
                </td>
                
                </td>
              </template>
              <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                From {{ pageStart }} to {{ pageStop }}
              </template>
            </v-data-table>
            <v-btn color="primary" @click.native="dialog = true" style="box-shadow: none; height: 60px; width: 100%; margin: 0px"><v-icon style="font-size: 21px; padding-right: 5px">playlist_add</v-icon></v-icon>Add Institution</v-btn>
          </v-card>
        </v-container>
        
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline" style="color: #4fa0ca">Give access to an Institution</span>
            </v-card-title>
            <v-card-text style="padding-left: 12.5%; padding-right: 12.5%">
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <label></label>
                    <template>
                      <v-form ref="form" lazy-validation>
                        <v-text-field
                          label="Institution Name"
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
                          label="Institution Address"
                          v-model="instAdd"
                          :rules="instAddRules"
                          required
                        ></v-text-field>
                      </v-form>
                    </template>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
              <v-spacer></v-spacer>
              <v-btn color="primary" :disabled="!valid" style="box-shadow: none; height: 60px; width: 100%; margin: 0px; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 5px">playlist_add</v-icon></v-icon>Add Institution</v-btn>
          </v-card>
        </v-dialog>
        
        <v-dialog v-model="settings_dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline" style="color: #4fa0ca">Edit this Institution</span>
            </v-card-title>
            <v-card-text style="padding-left: 12.5%; padding-right: 12.5%">
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <label></label>
                    <template>
                      <v-form ref="form" lazy-validation>
                        <v-text-field
                          label="Institution Name"
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
                          label="Institution Address"
                          v-model="instAdd"
                          :rules="instAddRules"
                          required
                        ></v-text-field>
                      </v-form>
                    </template>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
              <v-spacer></v-spacer>
              <v-btn color="error" style="box-shadow: none; height: 60px; width: 40%; margin: 0px; float: left; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 3px">remove_circle_outline</v-icon></v-icon>Delete Institution</v-btn>
              <v-btn color="primary" :disabled="!valid" style="box-shadow: none; height: 60px; width: 60%; margin: 0px; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 5px">playlist_add_check</v-icon></v-icon>Edit Institution</v-btn>
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
        min1chars: (v) => v.length >= 1 || 'Institution name is missing',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Institution Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Added On', value: 'date', align: 'center' },
          { text: 'Officer Name', value: 'offName', align: 'center' },
          { text: 'Institution Address', value: 'instAdd', align: 'center' },
          { text: 'Faculties', value: 'fac', align: 'center' },
          { text: 'Edit', value: 'settings', align: 'center' }
        ],
        items: [
          {
            value: false,
            name: 'Cairo University',
            offName: 'Ahmed Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Dec 20, 2017',
            fac: 13,
            date: 'Nov 13, 2017' ,
          },
          {
            value: false,
            name: 'Ain Shams University',
            offName: 'Mohamed Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Dec 20, 2017',
            fac: 29,
            date: 'Nov 13, 2017',
          },
          {
            value: false,
            name: 'October University for Modern Sciences and Arts',
            offName: 'Amr Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Dec 20, 2017',
            fac: 19,
            date: 'Nov 13, 2017',
          },
                    {
            value: false,
            name: 'Cairo University',
            offName: 'Ahmed Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Dec 20, 2017',
            fac: 13,
            date: 'Nov 13, 2017',
          },
          {
            value: false,
            name: 'Ain Shams University',
            offName: 'Mohamed Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Dec 20, 2017',
            fac: 29,
            date: 'Nov 13, 2017',
          },
          {
            value: false,
            name: 'October University for Modern Sciences and Arts',
            offName: 'Amr Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Nov 13, 2017',
            fac: 19,
            date: 'Dec 20, 2017',
          },
                    {
            value: false,
            name: 'Cairo University',
            offName: 'Ahmed Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Nov 13, 2017',
            fac: 13,
            date: 'Dec 20, 2017',
          },
          {
            value: false,
            name: 'Ain Shams University',
            offName: 'Mohamed Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Nov 13, 2017',
            fac: 29,
            date: 'Dec 20, 2017',
          },
          {
            value: false,
            name: 'October University for Modern Sciences and Arts',
            offName: 'Amr Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Nov 13, 2017',
            fac: 19,
            date: 'Dec 20, 2017',
          },
                    {
            value: false,
            name: 'Cairo University',
            offName: 'Ahmed Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Nov 13, 2017',
            fac: 13,
            date: 'Dec 20, 2017',
          },
          {
            value: false,
            name: 'Ain Shams University',
            offName: 'Mohamed Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Dec 20, 2017',
            fac: 29,
            date: 'Nov 13, 2017',
          },
          {
            value: false,
            name: 'October University for Modern Sciences and Arts',
            offName: 'Amr Elbaz',
            instAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            offDate: 'Nov 13, 2017',
            fac: 19,
            date: 'Dec 20, 2017',
          }
        ],
          name: '',
          nameRules: [
            (v) => !!v || 'Institution Name is required',
          ],
          offName: '',
          offNameRules: [
            (v) => !!v || 'Officer Name is required',
          ],
          instAdd: '',
          instAddRules: [
            (v) => !!v || 'Address is required',
            (v) => /0x.{40}$/.test(v) || 'Address must be valid'
          ]
      }
    },
    computed: {
      valid: function(){
        return (this.nameRules[0](this.name) === true && this.offNameRules[0](this.offName) === true && this.instAddRules[1](this.instAdd) === true)
      }
    }
  }
</script>