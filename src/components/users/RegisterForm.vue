<template>
  <v-container>
    <v-layout row>
      <v-flex class="image-container" xs12 sm6 lg6>
        <img
          class="register-image"
          src="../../../src/assets/register_image.svg"
        />
      </v-flex>
      <v-flex xs12 sm6 lg6>
        <v-card-text>
          <v-container class="register-form">
            <div v-if="error">
              <app-alert
                @dismissed="onDismissed"
                :text="error.message"
              ></app-alert>
            </div>
            <h1 class="register-title secondary--text mb-3">
              Bienvenido a WonderYoga
            </h1>
            <h2 class="mb-3">Crea una cuenta</h2>
            <form @submit.prevent="onSignUp">
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    type="email"
                    v-model="email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    v-model="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    type="confirmPassword"
                    v-model="confirmPassword"
                    :rules="[comparePasswords]"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12 mt-3>
                  <v-btn
                    block
                    color="primary"
                    type="submit"
                    :loading="loading"
                    :disabled="loading"
                    >Registrase</v-btn
                  >
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    }
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : ""
    },
    user() {
      return this.$store.getters.user
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/")
      }
    },
  },
  methods: {
    onSignUp() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password,
      })
    },
    onDismissed() {
      this.$store.dispatch("clearError")

      console.log("Dismissed alert !")
    },
  },
}
</script>

<style scoped>
.register-container {
  margin-top: 100px;
}

.image-container {
  margin-top: 110px;
  width: 30rem;
}

.register-image {
  width: 72%;
  height: auto;
}

.register-title {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
}

.register-form {
  margin-top: 59px;
}
</style>
