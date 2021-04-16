<template>
  <div>
    <div class="heading">
      <h2>Vuejs Assignment</h2>
    </div>
    <div class="main">
      <div class="img">
        <v-img
          class="white--text align-end"
          height="400px"
          width="400px"
          src="../assets/logo.png"
        ></v-img>
      </div>
      <div class="Card">
        <v-card elevation="10">
          <v-card-title class="pb-0">
            <b>Registeration Form:</b>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="userData.name"
                prepend-icon="mdi-pencil"
                :counter="7"
                :rules="nameRule"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="userData.email"
                prepend-icon="mdi-email"
                :rules="emailRule"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="userData.phno"
                prepend-icon="mdi-phone"
                :counter="10"
                :rules="phoneRule"
                label="Phone Number"
                required
              ></v-text-field>

              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="userData.date"
                    label="Select Your Date Of Birth"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="dateRule"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="userData.date"
                  @input="menu = false"
                ></v-date-picker>
              </v-menu>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Submit
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    valid: true,
    userData: {
      name: '',
      email: '',
      phno: '',
      date: '',
    },
    menu: false,
    nameRule: [
      (name) => !!name || 'Name is required',
      (name) => name.length >= 7 || 'Name must be greater than 7 characters',
    ],
    emailRule: [
      (email) => !!email || 'E-mail is required',
      (email) => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) || 'E-mail must be valid',
    ],
    phoneRule: [
      (phno) => !!phno || 'Phone Number is Required',
      (phno) => phno.length === 10 || 'Phone Number must be in 10 digits',
      (phno) => /^\d+$/.test(phno) || 'Please Enter only digits',
    ],
    dateRule: [(date) => !!date || 'Date is required'],
  }),
  methods: {
    ...mapActions(['setFormAction']),
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.setFormAction(this.userData);
        this.$router.push('/user');
      }
    },
  },
};
</script>
<style scoped lang="scss">
.heading {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding-top: 30px;
}
.main {
  display: flex;
  justify-content: space-around;
  padding: 100px;
  div {
    width: 500px;
    height: auto;
  }
}
</style>
