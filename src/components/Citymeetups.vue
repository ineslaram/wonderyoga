<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm3 lg3 v-for="data in myJson" :key="data.id">
        <card-city-meetup
          v-bind:key="data.city"
          :city="data.city"
          :background-image="data.backgroundImage"
          :title="data.title"
          :description="data.description"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import CardCityMeetup from "@/components/CardCityMeetup"
import json from "@/json/data.json"
export default {
  name: "Citymeetup",
  components: {
    CardCityMeetup,
  },
  data() {
    return {
      myJson: json,
    }
  },
  props: {
    city: {
      type: String,
      required: true,
      default: "",
    },

    backgroundImage: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
}
</script>

<style scoped>
.home--card--city {
  max-width: 277px;
}
</style>
