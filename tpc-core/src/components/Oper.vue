<template>
    <v-container style="max-width: 60%">
        <v-card>
            <v-card-title>
              <span class="headline" style="color: #4fa0ca; font-size: 21px !important"><v-icon style="margin-right: 4px; margin-left: 5px; color: rgb(79, 160, 202); font-size: 23px">library_add</v-icon>Add a new Certificate</span>
            </v-card-title>
            <v-card-text style="padding-left: 12.5%; padding-right: 12.5%">
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <label></label>
                    <template>
                      <v-form ref="form" lazy-validation>
                        <label style="float: left; margin-bottom: -20px">Student Full Name</label>
                        <v-text-field
                          v-model="name"
                          :rules="nameRules"
                          required
                          append-icon="person"
                        ></v-text-field>
                        <label style="float: left; margin-bottom: -20px">National ID</label>
                        <v-text-field
                          v-model="id"
                          :rules="idRules"
                          required
                          append-icon="credit_card"
                        ></v-text-field>
                        <label style="float: left; margin-bottom: -20px">Birthdate</label>
                        <v-dialog
                          persistent
                          v-model="bmodal"
                          :rules="dateRules"
                          lazy
                          full-width
                          width="290px"
                        >
                          <v-text-field
                            slot="activator"
                            v-model="bdate"
                            append-icon="event"
                            readonly
                          ></v-text-field>
                          <v-date-picker v-model="bdate" scrollable actions>
                            <template slot-scope="{ save, cancel }">
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                <v-btn flat color="primary" @click="save">OK</v-btn>
                              </v-card-actions>
                            </template>
                          </v-date-picker>
                        </v-dialog>
                        <label style="float: left; margin-bottom: -20px">Cumulative Grade</label>
                        <v-text-field
                          v-model="grade"
                          :rules="gradeRules"
                          required
                        ></v-text-field>
                        <label style="float: left; margin-bottom: -20px">Grade Percentage</label>
                        <v-text-field
                          v-model="gradePer"
                          :rules="gradePerRules"
                          suffix="%"
                          required
                        ></v-text-field>
                        <label style="float: left; margin-bottom: -20px">Graduation date</label>
                        <v-dialog
                          persistent
                          v-model="gmodal"
                          :rules="dateRules"
                          lazy
                          full-width
                          width="290px"
                        >
                          <v-text-field
                            slot="activator"
                            v-model="gdate"
                            append-icon="event"
                            readonly
                          ></v-text-field>
                          <v-date-picker v-model="gdate" scrollable actions>
                            <template slot-scope="{ save, cancel }">
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                <v-btn flat color="primary" @click="save">OK</v-btn>
                              </v-card-actions>
                            </template>
                          </v-date-picker>
                        </v-dialog>
                      </v-form>
                    </template>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="primary" style="box-shadow: none; height: 60px; width: 100%; margin: 0px; border-radius: 0px"><v-icon style="font-size: 21px; padding-right: 5px">add</v-icon></v-icon>Add Certificate</v-btn>
          </v-card>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      bdate: null,
      gdate: null,
      menu: false,
      bmodal: false,
      gmodal: false,
          name: '',
          nameRules: [
            (v) => !!v || 'Operator Name is required',
          ],
          id: '',
          idRules: [
            (v) => !!v || 'National ID is required',
            (v) => /^\d{28}$/.test(v) || 'National ID must be 28 digit',
          ],
          grade: '',
          gradeRules: [
            (v) => !!v || 'Cumulative Grade is required',
            (v) => /^[a-zA-Z]+$/.test(v) || 'Cumulative Grade is wrong'
          ],
          gradePer: '',
          gradePerRules: [
            (v) => !!v || 'Cumulative Percentage is required',
            (v) => /\d/.test(v) || 'Cumulative Percentage must be digits'
          ],
          dateRules: [
            (v) => !!v || 'Date is required',
          ],
          
    }),
    computed: {
      valid: function () {
        return (this.nameRules[0](this.name) === true && this.idRules[1](this.id) === true && this.gradeRules[0](this.grade) === true && this.gradePerRules[0](this.gradePer) === true && this.dateRules[0](this.bdate) === true && this.dateRules[0](this.gdate) === true)
      }
    }
  }
</script>