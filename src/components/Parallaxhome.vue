<template>
  <v-parallax class="parallax-home"
    dark
    src="https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  >
    <v-layout
      align-center
      column
      justify-center
    >
    <img src="../../src/assets/Logo_wonderyoga.svg" alt="">
      <h4 class="display-4 font-weight-thin mb-3">WONDERYOGA</h4>
      <h1 class="display-2 font-weight-thin mb-3">La forma más flexible de hacer Yoga</h1>
      <v-btn light large round color="white primary--text" dark>Explorar</v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
    name: "Parallaxhome"
}
</script>


<style scoped>

.v-parallax{
    margin-top: 80px;
    margin-bottom: 80px;
}

img{
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
}

.v-btn{
    width: 200px;
    margin-top: 20px;
}
</style>

