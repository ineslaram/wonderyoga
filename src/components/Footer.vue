<template>
    <div id="app">
  <v-app id="inspire">
    <v-footer
      height="auto"
      color="white lighten-1"
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="primary"
          flat
          round
        >
          {{ link }}
        </v-btn>
        <v-flex
          white
          lighten-2
          py-3
          text-xs-center
          primary--text
          xs12
        >
          &copy;2019 — <strong>WonderYoga</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</div>
</template>



<script>
export default {
  name: 'Footer',
    data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
  })
}

</script>


<style scoped>
#app{
    height: 150px;
}
</style>

