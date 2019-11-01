
  <!--<template>
  <v-container grid-list-md>
    <v-layout row>
      <v-flex xs12 sm3 lg3>
        <card-city-meetup
          v-for="data in myJson"
          v-bind:key="data.city"
          :city="data.city"
          :background-image="data.backgroundImage"
          :title="data.title"
          :description="data.description"
        />
      </v-flex>
      <v-flex xs12 sm3 lg3>
        <card-city-meetup
          city="Barcelona"
          background-image="https://images.unsplash.com/photo-1529551739587-e242c564f727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80"
          title="Más de 50 clases cada semana"
          description="Prueba nuestras clases en Barcelona"
        />
      </v-flex>
      <v-flex xs12 sm3 lg3>
        <card-city-meetup
          city="Sevilla"
          background-image="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          title="Más de 50 clases cada semana"
          description="Las mejores clases de Yoga en Sevilla"
        />
      </v-flex>

      <v-flex xs12 sm3 lg3>
        <card-city-meetup
          city="Ibiza"
          background-image="https://images.unsplash.com/photo-1534795391805-5d3f2a606031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          title="Más de 50 clases cada semana"
          description="Las mejores clases de Yoga en Ibiza"
        />
      </v-flex> 
    </v-layout>
  </v-container>
</template>
-->
    
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


 


<script>

import CardCityMeetup from "@/components/CardCityMeetup";
import json from '@/json/data.json'

export default {
  name: "Citymeetup",
  data() {
    return {
      myJson: json
    }
    components: {
      CardCityMeetup
    }
  }
}


</script>


<style scoped>
.home--card--city {
  max-width: 277px;
}
</style>

