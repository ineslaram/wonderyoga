<template>
    <v-container>
        <v-layout row>
            <v-flex xs3>
                
                <h2  jsutify-center class="primary--text ml-5">Paso 1</h2>
                <p class="ml-5">Registraté y comienza a buscar<br>
                las clases que mejor te vengan en tu ciudad. </p>
                <div class="step_three">
                <h2 class="primary--text ml-5">Paso 3</h2>
                <p class=" ml-5">Presentaré el día de la clase en la 
                dirección indicada y enséñale 
                Desde el movil la reserva a 
                tu profesora.</p>
                </div>
            </v-flex>  

            <v-flex>
                <img justify-center align-text src="../../src/assets/home_illustration_howworks.svg" alt="">
                
            </v-flex> 

            <v-flex xs3>
                <h2 class="primary--text ml-2">Paso 2</h2>
                <p class="ml-2">Cuando encuentres tu clase ideal, 
                reserva desde desde la 
                Web en dos clics.<br> 
                las clases que mejor te vengan.</p>
                <div class="step_four">
                <h2 class="primary--text ml-2">Paso 4</h2>
                <p class="ml-2">Comienza a disfrutar del Yoga en ciudad con WonderYoga, 
                con los mejores profesores de tu ciudad.</p>
                </div>
            </v-flex>  
        </v-layout>
        
    </v-container>
</template>


<script>
export default {
    name:"Howworks"
}
</script>


<style scoped>
img{
    height: 75%;
    display:block;
    margin:auto;
}

.step_three, .step_four{
    margin-top: 150px;
}


</style>

