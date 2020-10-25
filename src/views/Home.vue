<template>
  <div class="home">
    <Hero />
    <h2 class="citymeetups_title">
      Nuestras ciudades<br />
      más populares
    </h2>
    <Citymeetups />
    <h2 class="topmeetups_title">
      Clases con más<br />
      recomendaciones
    </h2>
    <Topmeetups />
    <Parallaxhome />
    <h2 class="howworks_title">Como funciona</h2>
    <Howworks />
    <Testimonial />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Homehero.vue";
import Citymeetups from "@/components/Citymeetups.vue";
import Topmeetups from "@/components/Topmeetups.vue";
import Parallaxhome from "@/components/Parallaxhome.vue";
import Howworks from "@/components/Howworks.vue";
import Testimonial from "@/components/Testimonial.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Hero,
    Citymeetups,
    Topmeetups,
    Parallaxhome,
    Howworks,
    Testimonial,
    Footer,
  },
};
</script>

<style>
body,
html {
  background-color: white !important;
}
.citymeetups_title,
.topmeetups_title,
.howworks_title {
  margin: 50px 0px 30px 64px;
}
</style>
