<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs12 sm3 lg3>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            :src="backgroundImage"
          >
            <v-container fill-height class="home--card--city">           
                  <v-card-title class="headline"> {{title}}</v-card-title>    
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text"></span>
              <br>
              <span class="primary--text">{{teacher}}</span>
              <br>
              <span>{{date}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="primary">Reservar</v-btn>
            <v-btn flat color="primary">5€</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
</template>

<script>
export default {
props: {
    backgroundImage:{
        type: String, 
        required: true,
        default: '' 
    },

   title:{
        type: String,
        default: ''

    },

    teacher:{
        type: String,
        default: ''
    },

    date:{
        type: String,
        default: ''
    }
}
}
</script>

<style>

</style>
