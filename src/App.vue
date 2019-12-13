<template>
  <v-app>
    <nav>
    <v-toolbar app class="white">
      <v-toolbar-title flat class="headline text-uppercase">
        <router-link to="/">
        <span class="font-weight-light primary--text">WonderYoga</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>    
      <router-link to="/explorar">
        <v-btn flat target="_blank">
          <span class="mr-2 primary--text">Explorar</span>
        </v-btn>
      </router-link>
      <router-link to="/publicar">
        <v-btn flat target="_blank">
          <span class="mr-2 primary--text">Publicar</span>
        </v-btn>
      </router-link>
      <router-link to="/registrarse">
        <v-btn flat target="_blank">
          <span class="mr-2 primary--text">Registrarse</span>
        </v-btn>
      </router-link>
      <router-link to="/entrar">
        <v-btn flat target="_blank">
          <span class="mr-2 primary--text">Entrar</span>
        </v-btn>
      </router-link>
      <router-link to="/perfil">
        <v-btn flat target="_blank">
          <span class="mr-2 primary--text">Perfil</span>
        </v-btn>
      </router-link>
      <router-link v-if="isUserAuthenticated" to="/perfil">
        <v-btn @click="onLogout" flat target="_blank">
          <v-icon class="primary--text">exit_to_app</v-icon><span class="exit primary--text">Salir</span>
        </v-btn>
      </router-link>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    </nav>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuItems: [
        { title: "Explorar" },
        { title: "Publicar" },
        { title: "Registrarse" },
        { title: "Entrar" }
      ]
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isUserAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>

<style>
.theme--light.application {
  background: white !important;
}

.application--wrap {
  min-height: auto;
}

a {  
  text-decoration: none;
}

.exit{
  margin-left: 5px;
}
</style>

