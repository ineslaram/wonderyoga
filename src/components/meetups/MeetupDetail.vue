<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card width="800" class="meetup-card" justify-center>
          <v-card-title>
            <h1 class="primary--text">{{ meetup.title }}</h1>
          </v-card-title>
          <v-img :src="meetup.imageUrl" height="250"> </v-img>
          <v-card-text>
            <p class="date">{{ meetup.date | date }}</p>
            <h3>Detalles</h3>
            <p class="description">{{ meetup.description }}</p>
            <h3>Profesora</h3>
            <p class="description">
              {{ meetup.firstName }} {{ meetup.lastName }}
            </p>
            <h3>Dirección</h3>
            <p>{{ meetup.address }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">
              Registrarse
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "meetupDetail",
  props: {
    id: {
      type: String
    }
  },
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>

<style lang="scss">
.meetup-card {
  margin: 0 auto;
  max-width: 800px;
  .date {
    font-size: 16px;
    font-weight: bold;
  }
  .description {
    white-space: pre-line;
  }
}
</style>
