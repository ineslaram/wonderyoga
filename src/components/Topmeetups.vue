<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="meetup in lastLoadMeetups" :key="meetup.id" xs12 sm3 lg3>
        <v-card>
          <v-img class="white--text" height="200px" :src="meetup.imageUrl">
            <v-container fill-height class="home--card--city">
              <v-card-title class="headline">{{ meetup.title }}</v-card-title>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text"></span>
              <br />
              <span class="primary--text"
                >Con {{ meetup.firstName }} {{ meetup.lastName }}</span
              >
              <br />
              <span
                ><p>{{ meetup.date | date }} {{ meetup.time }}</p></span
              >
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="primary">Reservar</v-btn>
            <v-btn flat color="primary">5€</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Topmeetups",
  computed: {
    lastLoadMeetups() {
      return this.$store.getters.loadedMeetups.splice(0, 4)
    },
  },
}
</script>

<style scoped>
.topmeetups_price {
  font-size: 20px;
  padding-left: 5%;
}
</style>
