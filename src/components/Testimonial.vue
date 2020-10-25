<template>
  <v-container fluid class="background_testimonial">
    <v-container class="image_wrapper">
      <v-flex>
        <img
          class="testimonial_image"
          src="../../src/assets/Testimonial.svg"
          alt
        />
        <div class="testimonal_name">
          <h2 class="white--text headline font-weight-light mt-3">
            Alba Márquez
          </h2>
          <h2 class="white--text title font-weight-light mt-1">
            Diseñadora UI
          </h2>
        </div>
      </v-flex>
    </v-container>

    <v-flex class="testimonial_content">
      <q class="font-weight-light mb-3">
        Por motivos laborales no tengo
        <br />mucho tiempo y viajo mucho. Por eso, <br />No puedo apuntarme a
        una escuela de <br />Yoga y gracias a WonderYoga puedo reservar
        <br />una clase de Yoga cuando quiera, <br />sin tener que pagar altas
        cuotas mensuales
      </q>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Testimonial",
}
</script>

<style scoped>
.background_testimonial {
  background-image: url("../../src/assets/Background_pink.svg");
  background-size: cover;
  height: 700px;
  width: 100%;
  background-repeat: no-repeat;
  position: relative;
  right: 7px;
}

.image_wrapper {
  width: 600px;
  height: 400px;
  position: relative;
  left: 280px;
  top: 200px;
}

.testimonial_image {
  width: 100%;
  height: auto;
  position: relative;
  top: -201px;
}

.testimonial_content {
  position: relative;
  top: -250px;
  left: 70px;
  color: white;
  font-size: 24px;
  line-height: 25px;
}

.testimonal_name {
  position: relative;
  top: -190px;
  left: 400px;
  color: white;
}
</style>
