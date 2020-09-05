<template>
    <div>
        <v-row class="mt-10">
            <v-bottom-navigation
                v-model="botonNavegacion"
            >
                <v-btn value="inicio">
                    <span>Inicio</span>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn value="nosotros">
                    <span>Nosotros</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>
                <v-btn value="contacto">
                    <span>Contacto</span>
                    <v-icon>mdi-cellphone</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-row>
        <v-row class="mt-10">
            <v-bottom-navigation
                v-bind:value="botonNavegacionIndice"
                color="purple lighten-1"
            >
                <v-btn>
                    <span>Inicio</span>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn>
                    <span>Nosotros</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>
                <v-btn>
                    <span>Contacto</span>
                     <v-icon>mdi-cellphone</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-row>
        <v-row class="mt-10">
            <v-bottom-navigation
                v-bind:value="botonNavegacionGrow"
                grow
                active-class="white"
                color="orange"
            >
                <v-btn>
                    <span>Inicio</span>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn>
                    <span>Nosotros</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>
                <v-btn>
                    <span>Contacto</span>
                    <v-icon>mdi-cellphone</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-row>
        <v-row class="mt-10">
            <v-bottom-navigation
                horizontal
                color="blue"
                active-class="white"
            >
                <v-btn>
                    <span>Inicio</span>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn>
                    <span>Nosotros</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>
                <v-btn>
                    <span>Contacto</span>
                    <v-icon>mdi-cellphone</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-row>
        <v-row class="mt-10">
            <v-bottom-navigation
                v-model="botonNavegacionShif"
                shift
                v-bind:color="color"
                active-class="white"
            >
                <v-btn>
                    <span>Inicio</span>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn>
                    <span>Nosotros</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>
                <v-btn>
                    <span>Contacto</span>
                    <v-icon>mdi-cellphone</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-row>
        <v-row class="mt-10 overflow-hidden">
            <div class="text-center" style="width: 100%;">
                <v-btn
                    text
                    v-on:click="mostrarNavegacion = !mostrarNavegacion"
                >
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </div>
            <v-bottom-navigation
               v-bind:input-value="mostrarNavegacion"
               v-model="botonNavegacionIndice2"
               color="orange"
               active-class="white"
            >
                 <v-btn>
                    <span>Inicio</span>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn>
                    <span>Nosotros</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>
                <v-btn>
                    <span>Contacto</span>
                    <v-icon>mdi-cellphone</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-row>
    </div>
</template>


<script>
export default {
    data: function(){
       return {
            botonNavegacion: 'inicio',
            botonNavegacionIndice: 1,
            botonNavegacionGrow: 2,
            botonNavegacionShif: 0,
            mostrarNavegacion: false,
            botonNavegacionIndice2: 0
       }
    },
    computed: {
        color: function() {

            switch(this.botonNavegacionShif) {

                case 0: return 'orange';

                case 1: return 'green';

                case 2: return 'red';

            }

            return ''

        }
    }
}
</script>