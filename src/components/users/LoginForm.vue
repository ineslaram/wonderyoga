<template>
  <v-container class="login-container">
    <v-layout row>
      <v-flex class="image-container" xs12 sm6 lg6>
        <img class="login-image" src="../../../src/assets/login_image.svg" />
      </v-flex>
      <v-flex xs12 sm6 lg6>
        <v-card-text>
          <v-container class="login-form">
            <div v-if="error">
              <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </div>
            <h1 class="login-title secondary--text mb-3">Bienvenido a WonderYoga</h1>
            <h2 class="mb-3">Entrar</h2>
            <form @submit.prevent="onSignIn">
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
                <v-flex xs12 mt-3>
                  <v-btn 
                    block 
                    color="primary" 
                    type="submit"
                    :loading="loading"
                    :disabled="loading"
                    >Entrar</v-btn>
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
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onDismissed() {
      this.$store.dispatch("clearError");

      console.log("Dismissed alert !");
    }
  }
};
</script>

<style scoped>
.login-container {
  margin-top: 45px;
}

.image-container {
  margin-top: 70px;
  width: 30rem;
}

.login-image {
  width: 35rem;
  height: auto;
}

.login-title {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
}

.login-form {
  margin-top: 59px;
}
</style>