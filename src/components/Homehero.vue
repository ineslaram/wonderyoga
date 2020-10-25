<template>
  <v-container class="home-hero fluid">
    <v-flex class="home--content">
      <h2 class="home--title">
        Encuentra una clase de Yoga <br />
        donde quieras,cuando quieras.
      </h2>

      <v-layout row>
        <v-flex xs12 mt-3>
          <v-btn block color="white" type="submit" class="home--btn"
            >Explorar</v-btn
          >
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Hero",
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
  padding: 150px;
}

.home--title {
  color: white;
  font-size: 35px;
}

.home--search-wrapper {
  position: relative;
}

.home--btn {
  width: 200px;
  max-width: 414px;
  margin-top: 15px;
  color: #e55173;
}

@media (max-width: 888px) {
  .home--content {
    padding: 200px 0px 100px 10%;
  }
  .home--title {
    color: white;
    font-size: 30px;
  }
}
@media (max-width: 470px) {
  .home--content {
    padding-top: 100px;
  }
}
</style>
