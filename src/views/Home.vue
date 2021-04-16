<template>
  <div class="home">
    <Header />
    <sidenav />
    <div class="centerdata">
      <div class="heading">
        <b>Users Data</b>
      </div>
      <div class="loading" v-if="loading === true">
        <h2>Data is loading...</h2>
      </div>
      <div v-else>
        <v-card
          class="mx-auto"
          max-width="1200"
          max-height="470"
          elevation="22"
        >
          <v-card-title class="pb-0">
            <b>Users Information:</b>
          </v-card-title>

          <v-card-text class="text--primary">
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left" colspan="4">Name</th>
                    <th class="text-left" colspan="4">Username</th>
                    <th class="text-left" colspan="4">Email</th>
                    <th class="text-left" colspan="4">Address</th>
                    <th class="text-left" colspan="4">Phone Number</th>
                    <th class="text-left" colspan="4">Website</th>
                    <th class="text-left" col-span="4">Company</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="person in getListOfUsers" :key="person.id">
                    <td colspan="4">{{ person.name }}</td>
                    <td colspan="4">{{ person.username }}</td>
                    <td colspan="4">{{ person.email }}</td>
                    <td colspan="4">
                      {{ person.address.street }}/{{ person.address.suite }}
                    </td>
                    <td colspan="4">{{ person.phone }}</td>
                    <td colspan="4">{{ person.website }}</td>
                    <td colspan="4">{{ person.company.name }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import Header from '../components/Header.vue';
import Sidenav from '../components/Sidenav.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Sidenav,
    Footer,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters(['getListOfUsers']),
  },
  mounted() {
    this.loadData();
  },
  methods: {
    ...mapActions(['setUserAction']),
    async loadData() {
      this.loading = true;
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        this.setUserAction(response.data);
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped lang='scss'>
.home {
  width: 100%;
}
.centerdata {
  position: fixed;
  left: 100px;
  height: 100%;
  width: 100%;
  padding: px;
  .heading {
    position: relative;
    text-align: center;
    right: 100px;
    font-weight: 500;
    padding-bottom: 10px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 30px;
    line-height: 50px;
  }
}
.loading {
  position: absolute;
  text-align: center;
  left: 500px;
  font-size: 20px;
}

</style>
