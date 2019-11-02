<template color="#F1F2F2">
  <div class="publicar">
    <v-card color="#F1F2F2" flat>
      <v-snackbar v-model="snackbar" absolute top right color="success">
        <span>Registration successful!</span>
        <v-icon dark>check_circle</v-icon>
      </v-snackbar>

      <span class="publicarElement--titulo">PUBLICA TU CLASE DE YOGA</span>
      <v-form class="publicar--form" ref="form" @submit.prevent="submit">
        <v-container grid-list-xl>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field
                v-model="form.first"
                :rules="rules.name"
                color="primary"
                label="Nombre"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                v-model="form.last"
                :rules="rules.name"
                color="primary"
                label="Apellido"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-textarea v-model="form.bio" color="primary">
                <template v-slot:label>
                  <div color="primary--text">
                    Encontremos un título bonito para tu anuncio
                  </div>
                </template>
              </v-textarea>
            </v-flex>

            <v-flex xs12>
              <v-textarea v-model="form.bio" color="primary">
                <template v-slot:label>
                  <div color="primary--text">
                    Describenos como son tus clases
                  </div>
                </template>
              </v-textarea>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                v-model="form.last"
                color="primary"
                label="Dirección"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select
                v-model="form.ciudad"
                :items="ciudad"
                :rules="rules.ciudad"
                color="primary"
                label="Ciudad"
                required
              ></v-select>
            </v-flex>
        
            <v-flex xs12>
              <v-checkbox v-model="form.terms" color="green">
                <template v-slot:label>
                  <div @click.stop>
                    Do you accept the
                    <a href="javascript:;" @click.stop="terms = true">terms</a>
                    and
                    <a
                      href="javascript:;"
                      @click.stop="conditions = true"
                    >conditions?</a>
                  </div>
                </template>
              </v-checkbox>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat @click="resetForm">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="!formIsValid" flat color="primary" type="submit">Register</v-btn>
        </v-card-actions>
      </v-form>
      <v-dialog v-model="terms" width="70%">
        <v-card>
          <v-card-title class="title">Terms</v-card-title>
          <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="purple" @click="terms = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="conditions" width="70%">
        <v-card>
          <v-card-title class="title">Conditions</v-card-title>
          <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="purple" @click="conditions = false">Ok</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>


<script>
  export default {
    name: 'Publicar',
    data () {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        bio: '',
        ciudad: '',
        age: null,
        terms: false
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          age: [
            val => val < 10 || `I don't believe you!`
          ],
          animal: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required']
        },
        ciudad: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Ibiza'],
        conditions: false,
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
        snackbar: false,
        terms: false,
        defaultForm
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.last &&
          this.form.favoriteAnimal &&
          this.form.terms
        )
      }
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      }
    }
  }
</script>


<style scoped>

*{
    box-sizing: border-box;
    
}

.v-content__wrap{
    background-color: #E55173 !important;
}

.publicar{

    width:  70%;
    height: 100%;
    margin: 70px auto;
}

.publicarElement--titulo{
    
    font-weight: 700;
    color: #E55173;
    margin: 70px 17px 30px;
    font-size: 18px;
    padding: 10px;
}

.publicar--form{
    margin-top: 37px;
    padding: 10px;
}


</style>
