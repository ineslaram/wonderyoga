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

            <v-flex xs12 sm12>
              <v-text-field
                v-model="price"
                value="10.00"
                type="number"
                label="Precio"
                suffix="€"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm12>
              <v-btn color="has-text--primary" @click="onPickFile">Subir foto</v-btn>
                <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12>
              <img :src="imageUrl" height="100" />
            </v-flex>
          </v-layout>

          <h1>Lugar de la clase</h1>

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

          <h1>Fecha de la clase</h1>

          <v-layout>
            <v-flex>
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Fecha"
                    hint="MM/DD/YYYY formato"
                    persistent-hint
                    prepend-icon="event"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-flex>

            <v-flex cols="11" sm="5">
              <v-menu
                ref="menu"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="time"
                    label="Hora"
                    prepend-icon="access_time"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="menu2"
                  v-model="time"
                  full-width
                  @click:minute="$refs.menu.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-flex>
          </v-layout>

          <v-btn
            color="secondary"
            type="submit"
            :disabled="!formIsValid"
            xs12
            sm3
            offset-sm3
            >Publicar</v-btn
          >
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
      firstName: "",
      lastName: "",
      title: "",
      description: "",
      imageUrl: "",
      address: "",
      type: "",
      price: "",
      date: null,
      menu: false,
      modal: false,
      menu1: false,
      time: null,
      menu2: false,
      modal2: false,
      image: null
    };
  },

  computed: {
    formIsValid() {
      return (
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.title !== "" &&
        this.description !== "" &&
        this.imageUrl !== "" &&
        this.address !== "" &&
        this.type !== ""
      );
    },
    formattedDate() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        const hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      console.log(date);
      return date;
    }
  },

  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      if(!this.image) {
        return
      }
      const meetupData = {
        firstName: this.firstName,
        lastName: this.lastName,
        title: this.title,
        description: this.description,
        image: this.image,
        address: this.address,
        type: this.type,
        price: this.price,
        date: this.formattedDate,
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("explorar");
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name
      if(filename.lastIndexOf('.') <= 0) {
        return ('Por favor, introduce una imagen valida.')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
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
