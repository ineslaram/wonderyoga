<template>
  <v-app>
    <v-toolbar app class="white">
      <v-toolbar-title flat class="headline text-uppercase">
        <span class="font-weight-light primary--text">WonderYoga</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="item in menuItems" :key="item.title" flat target="_blank">
        <span class="mr-2 primary--text">{{item.title}}</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menuItems: [
        { title: 'Explorar' },
        { title: 'Publicar' },
        { title: 'Registrarse' },
        { title: 'Entrar' }
      ]
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
</style>

