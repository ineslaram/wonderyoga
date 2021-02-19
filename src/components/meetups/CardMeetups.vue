<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card
          v-for="meetup in meetups"
          :key="meetup.id"
          max-width="1000px"
          class="cardmeetup"
        >
          <v-container class="cardmeetups-container">
            <v-layout row wrap>
              <v-flex xs12 sm4 lg4>
                <div class="text-xs-center">
                  <v-layout row wrap justify-center>
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
                </div>
                <v-img
                  v-if="!loading"
                  class="meetups-image"
                  height="100%"
                  :src="meetup.imageUrl"
                />
              </v-flex>
              <v-flex sm5 lg5>
                <v-card-title>
                  <div>
                    <h3 class="primary--text">{{ meetup.title }}</h3>
                    <p>{{ meetup.address }}</p>
                    <p>
                      <strong>{{ meetup.type }}</strong>
                    </p>
                    <p>
                      Con
                      <strong
                        >{{ meetup.firstName }} {{ meetup.lastName }}</strong
                      >
                    </p>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex class="card-price-container" sm3 lg3>
                <v-card-title>
                  <div class="second-title-container">
                    <h1 class="primary--text">{{ meetup.price }}€</h1>
                    <p>{{ meetup.date | date }}</p>
                    <p>{{ meetup.time }}</p>
                    <v-card-actions>
                      <router-link :to="'/meetup/' + meetup.id">
                        <v-btn
                          @click="onLoadMeetup(meetup.id)"
                          color="secondary"
                          >Ver más</v-btn
                        >
                      </router-link>
                    </v-card-actions>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "CardMeetups",
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups
    },
    loading() {
      return this.$store.getters.loading
    },
  },
  mounted() {
    this.loadData()
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id)
    },
    async loadData() {
      await this.$store.dispatch("loadMeetups")
    },
  },
}
</script>

<style lang="scss" scoped>
.cardmeetups-container {
  padding: 0;
}

.cardmeetup {
  margin: 0 auto;
  margin-bottom: 20px;
}

.card-price-container {
  text-align: center;
}

.second-title-container {
  margin: 0 auto;
}

.loading {
  margin-top: 70px;
}
</style>
