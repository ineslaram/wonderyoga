<template>
  <v-container>
    <v-layout row wrap justify-center v-if="loading">
      <v-flex class="text-xs-center" xs12 sm4 lg4>
        <v-progress-circular
          class="text-xs-center loading test"
          v-if="loading"
          indeterminate
          color="primary"
          align-center
        ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex xs12>
        <v-card width="800" class="meetup-card" justify-center>
          <v-card-title>
            <h1 class="primary--text">{{ meetup.title }}</h1>
            <v-spacer></v-spacer>
            <AddEditMeetupModal v-if="userIsCreator" :meetup="meetup">
            </AddEditMeetupModal>
          </v-card-title>
          <v-img :src="meetup.imageUrl" height="250"> </v-img>
          <v-card-text>
            <div class="text-header">
              <p class="date">{{ meetup.date | date }}</p>
              <div class="edit-dates-btns" v-if="userIsCreator">
                <MeetupEditDateModal :meetup="meetup"></MeetupEditDateModal>
                <MeetupEditTimeModal :meetup="meetup"></MeetupEditTimeModal>
              </div>
            </div>
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
            <MeetupRegistrationModal
              :meetupId="meetup.id"
            ></MeetupRegistrationModal>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "meetupDetail",
  components: {
    AddEditMeetupModal: () => import("@/components/meetups/MeetupEditModal"),
    MeetupEditDateModal: () =>
      import("@/components/meetups/MeetupEditDateModal"),
    MeetupEditTimeModal: () =>
      import("@/components/meetups/MeetupEditTimeModal"),
    MeetupEditTimeModal: () =>
      import("@/components/meetups/MeetupEditTimeModal"),
    MeetupRegistrationModal: () =>
      import("@/components/meetups/MeetupRegistrationModal"),
  },
  props: {
    id: {
      type: String,
    },
  },
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id)
    },
    loading() {
      return this.$store.getters.loading
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user != null &&
        this.$store.getters.user != undefined
      )
    },
    userIsCreator() {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    },
  },
}
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
  .text-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
p {
  margin: 0;
}
</style>
