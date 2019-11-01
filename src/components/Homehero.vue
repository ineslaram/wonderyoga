<template>
  <v-container class="home-hero fluid">
    <v-flex class="home--content">
      <h2 class="white--text">
        Encuentra una clase de Yoga donde quieras,
        <br>cuando quieras.
      </h2>

      <v-flex xs12>
        <v-text-field
          class="home--search--input"
          style="border-radius:50px"
          label="Valencia"
          solo
          append-icon="search"
        >
          <v-icon>search</v-icon>
        </v-text-field>
      </v-flex>
    </v-flex>
  </v-container>
</template>




<script>


export default {
    name:"Hero"
}
</script>


<style <style scoped>
.template {
  font-family: "Montserrat", sans-serif;
}
.home-hero {
  background-image: url(../../src/assets/home-wonderyoga.png);
  width: 100%;
  height: 550px;
  background-size: cover;
}

.home--content {
  display: flex;
  flex-direction: column;
  padding: 200px;
}

.home--search-wrapper {
  position: relative;
}

.home--search--input {
  width: 79%;
  max-width: 414px;
  margin-top: 15px;
}
</style>


