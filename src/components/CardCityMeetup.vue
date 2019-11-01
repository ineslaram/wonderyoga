<template>
<v-card>
          <v-img
            class="white--text"
            height="200px"
            :src="backgroundImage"
          >
            <v-container fill-height class="home--card--city">
              <v-layout fill-height>
                <v-flex xs3 align-end flexbox>
                  <span class="headline">{{city}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text"></span>
              <br>
              <span class="primary--text">{{title}}</span>
              <br>
              <span>{{description}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="primary">Compartir</v-btn>
            <v-btn flat color="primary">Explorar</v-btn>
          </v-card-actions>
        </v-card>
        </template>

<script>
export default {
props: {
    city:{
        type: String, 
        required: true,
        default: ''
    },

    backgroundImage:{
        type: String,
        default: ''

    },

    title:{
        type: String,
        default: ''
    },

    description:{
        type: String,
        default: ''
    }
}
}
</script>

<style>

</style>
