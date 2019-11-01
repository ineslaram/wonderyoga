<template>
  <v-app>
    <nav>
      <v-snackbar
        v-model="snackbar"
        :timeout="5000"
        color="primary"
        @registerSucess="snackbar=true" 
      >
        Te has registrado correctamente !
        <v-btn flat color="white" @click="snackbar = false">Cerrar</v-btn>
      </v-snackbar>
    <v-toolbar app class="white">
      <v-toolbar-title flat class="headline text-uppercase">
        <span class="font-weight-light primary--text">WonderYoga</span>
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
      ],
      snackbar: false
    };
  }
};
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
</style>

