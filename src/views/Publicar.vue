<template>
  <div class="publicar">
    <v-card flat>
      <h1 class="publicarElement--titulo">PUBLICA TU CLASE DE YOGA</h1>
      <form @submit.prevent="onCreateMeetup" class="publicar--form">
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field
                v-model="firstName"
                id="firstName"
                name="firstName"
                color="primary"
                label="Nombre"
                required
              ></v-text-field>
            </v-flex>
           
            <v-flex xs12 sm6>
              <v-text-field
                v-model="lastName"
                id="lastName"
                name="lastName"
                color="primary"
                label="Apellido"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm12>
              <v-textarea
                v-model="title"
                id="title"
                name="title"
                color="primary"
                label="Título de la publicación"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm12>
              <v-textarea
                v-model="description"
                id="description"
                name="description"
                color="primary"
                label="Descripción"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm12>
              <v-text-field
                v-model="type"
                id="type"
                name="type"
                color="primary"
                label="Tipo de yoga"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm12>
              <v-text-field
                v-model="imageUrl"
                id="imageUrl"
                name="imageUrl"
                color="primary"
                label="Imagen*"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12>
              <img 
                :src="imageUrl"
                height="100"
                >
            </v-flex>
          </v-layout>

          <h1>Lugar y fecha de la clase</h1>
          <p>Fecha</p>

          <v-layout row>
            <v-flex xs12 sm12>
              <v-text-field
                v-model="address"
                id="address"
                name="address"
                color="primary"
                label="Dirección"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          
          <v-btn 
              color="secondary" 
              type="submit"
              :disabled="!formIsValid" 
              xs12 
              sm3 
              offset-sm3
              >Publicar</v-btn>       
        </v-container>  
      </form>
    </v-card>
  </div>
</template>


<script>
export default {
  name: "Publicar",
  data() {
    return {
       firstName: '',
       lastName: '',
       title: '',
       description: '',
       imageUrl: '',
       address: '',
       type: ''
    }
  },

  computed: {
    formIsValid() {
      return this.firstName !== '' &&
      this.lastName !== '' &&
      this.title !== '' &&
      this.description !== '' &&
      this.imageUrl !== '' &&
      this.address !== '' &&
      this.type !== ''
    }  
  },

  methods: {
     onCreateMeetup() {
       if(!this.formIsValid){
         return
       }
       const meetupData = {
         firstName: this.firstName,
         lastName: this.lastName,
         title: this.title,
         description: this.description,
         imageUrl: this.imageUrl,
         address: this.address,
         type: this.type,
         date: new Date()
       }
       this.$store.dispatch('createMeetup', meetupData)
       this.$router.push('explorar')
       console.log(meetupData)
     }
  }

}
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.v-content__wrap {
  background-color: #e55173 !important;
}

.publicar {
  width: 70%;
  height: 100%;
  margin: 70px auto;
}

.publicarElement--titulo {
  font-weight: 700;
  color: #e55173;
  margin: 70px 17px 30px;
  font-size: 18px;
  padding: 10px;
}

.publicar--form {
  margin-top: 37px;
  padding: 10px;
}
</style>
