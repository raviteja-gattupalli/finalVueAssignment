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
        <v-card shaped elevation="20" >
          <v-card-title class="pb-0">
            <b>{{getFormData.name.toUpperCase()}}'S DATA:</b>
          </v-card-title><br>
          <v-card-text>
            <p>Name:<b>{{getFormData.name.toUpperCase()}}</b></p><br>
            <p>Email:<b>{{getFormData.email}}</b></p><br>
            <p>Mobile Number:<b>{{getFormData.phno}}</b></p><br>
            <p>Date Of Birth:<b>{{getFormData.date}}</b></p><br>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'User',
  computed: {
    ...mapGetters(['getFormData']),
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
p{
  font-size: 20px;
}
</style>
