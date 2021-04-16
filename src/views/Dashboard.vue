<template>
  <div>
    <div class="heading">Rohit Sharma IPL scores From 2010 to 2020</div>
    <div class="main">
      <div class="card">
        <v-card class="mx-auto" max-width="600">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/rohit.jpg"
          >
          </v-img>

          <v-card-subtitle class="pb-0">
            <b>Rohit Sharma</b>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              <i
                >Rohit Gurunath Sharma (born 30 April 1987) is an Indian
                international cricketer who plays for Mumbai in domestic cricket
                and captains Mumbai Indians in the Indian Premier League as a
                right-handed batsman and an occasional right-arm off break
                bowler. He is the vice-captain of the Indian national team in
                limited-overs formats.</i
              >
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div class="graphs">
        <div class="card">
          <v-card class="mx-auto" max-width="600">
            <v-card-subtitle class="pb-0">
              <b>Rohit Sharma IPL SCORES BAR GRAPH</b>
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                <apexchart
                  width="450"
                  type="bar"
                  :options="options"
                  :series="series"
                ></apexchart>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="card">
        <v-card class="mx-auto" max-width="600">
          <v-card-subtitle class="pb-0">
            <b>Rohit Sharma IPL SCORES LINE GRAPH</b>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>
              <apexchart
                width="450"
                type="line"
                :options="options"
                :series="series"
              ></apexchart>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashBoard',
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart',
        },
        xaxis: {
          categories: [
            2010,
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
          ],
        },
      },
      series: [
        {
          name: 'RohitScore',
          data: [404, 372, 433, 538, 390, 482, 489, 333, 286, 405, 332],
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  justify-content: space-around;
  margin: 40px;
}
.heading {
  text-align: center;
  margin: 40px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
}
.pb-0 {
    padding:20px;
    font-weight:bold;
    font-size:18px;
}
.text--primary{
    padding-left:20px;
    padding-bottom:20px;
}
</style>
