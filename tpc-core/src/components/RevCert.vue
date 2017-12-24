<template>
    <div>
        <v-container>
          <v-card>
            <v-card-title>
              <span style="font-size: 20px; margin-left: 10px; font-weight: 200;">Certificates waiting for approval</span>
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
                <td class="text-xs-center">{{ props.item.Id }}</td>
                <td class="text-xs-center">{{ props.item.date }}</td>
                <td class="text-xs-center">{{ props.item.CertAdd }}</td>
                <td class="text-xs-left">{{ props.item.OffName}}</td>
                <td class="text-xs-center">
                  <v-btn @click.native="approval_dialog = true" style="background-color: transparent; margin-left: -20px; margin-right: -20px; box-shadow: none">
                    <v-icon>assignment_turned_in</v-icon>
                  </v-btn>
                </td>
              </template>
              <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                From {{ pageStart }} to {{ pageStop }}
              </template>
            </v-data-table>
          </v-card>
        </v-container>
        
        <v-dialog v-model="approval_dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline" style="color: #4fa0ca">Review this certificate</span>
            </v-card-title>
            <v-card-text style="padding-left: 12.5%; padding-right: 12.5%">
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <label></label>
                    <template>
                      <v-form ref="form" lazy-validation>
                        <label style="float: left; margin-bottom: -20px">Student Name</label>
                        <v-text-field
                          label="Abdullah Saeed"
                          disabled
                        ></v-text-field>
                        <label style="float: left; margin-bottom: -20px">National ID</label>
                        <v-text-field
                          label="131350059391030390209"
                          disabled
                        ></v-text-field>
                        <label style="float: left; margin-bottom: -20px">Date Added</label>
                        <v-text-field
                          label="Nov 13, 2017"
                          disabled
                        ></v-text-field>
                        <label style="float: left; margin-bottom: -20px">Certificate Address</label>
                        <v-text-field
                          label="0xab0bc903f11446146df74f6e4b0c9e16"
                          disabled
                        ></v-text-field>
                        <label style="float: left; margin-bottom: -20px">Operator Name</label>
                        <v-text-field
                          label="Ahmed Mahmoud"
                          disabled
                        ></v-text-field>
                      </v-form>
                    </template>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
              <v-spacer></v-spacer>
              <v-btn color="error" style="box-shadow: none; height: 60px; width: 50%; margin: 0px; float: left; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 3px">close</v-icon></v-icon>Revoke</v-btn>
              <v-btn color="success" style="box-shadow: none; height: 60px; width: 50%; margin: 0px; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 5px">done</v-icon></v-icon>Approve</v-btn>
          </v-card>
        </v-dialog>
    </div>
</template>



<script>
  export default {
    data () {
      return {
        tmp: '',
        search: '',
        pagination: {},
        approval_dialog: false,
        headers: [
          {
            text: 'Student Name',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'National ID', value: 'Id', align: 'center' },
          { text: 'Added On', value: 'date', align: 'center' },
          { text: 'Certificate Address', value: 'CertAdd', align: 'center' },
          { text: 'Operator Name', value: 'OffName', align: 'center' },
          { text: 'Review', value: 'settings', align: 'center' }
        ],
        items: [
          {
            value: false,
            name: 'Ahmed Mahmoud',
            OffName: 'Ahmed Mahmoud',
            CertAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            Id: 135005939190303902039,
            date: 'Nov 13, 2017' ,
          },
          {
            value: false,
            name: 'Ali khaled',
            OffName: 'Ahmed Mahmoud',
            CertAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            Id: 213500593910303902093,
            date: 'Nov 13, 2017',
          },
          {
            value: false,
            name: 'Ahmed nagy',
            OffName: 'Ahmed Mahmoud',
            CertAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            Id: 131350059391030390209,
            date: 'Nov 13, 2017',
          },
          {
            value: false,
            name: 'Moustafa farghaly',
            OffName: 'Ahmed Mahmoud',
            CertAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            Id: 101135005939103039020,
            date: 'Nov 13, 2017',
          },
          {
            value: false,
            name: 'Nour Haridy',
            OffName: 'Ahmed Mahmoud',
            CertAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            Id: 231350059391030390209,
            date: 'Dec 20, 2017',
          },
          {
            value: false,
            name: 'Ihab Essam',
            OffName: 'Ahmed Mahmoud',
            CertAdd: '0xab0bc903f11446146df74f6e4b0c9e16',
            Id: 132135005939103039020,
            date: 'Dec 20, 2017',
          },
        ]
      }
    }
  }
</script>