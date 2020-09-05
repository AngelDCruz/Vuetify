<template>
    <div>
        <v-row class="mt-10">
            <v-app-bar
                color="orange"
            >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <!-- <v-toolbar-title>Inicio</v-toolbar-title> -->
                <v-spacer></v-spacer>
               
                  <v-col class="text-right">
                        <v-btn small class="mr-1">Inicio</v-btn>
                        <v-btn small class="mr-1">Nosotros</v-btn>
                        <v-btn small class="mr-1">Contacto</v-btn>
                  </v-col>
               
            </v-app-bar>
        </v-row>
         <v-row class="mt-10">
            <v-app-bar
                color="orange"
                dense
                bottom
                clipped-left
                v-bind:collapse="true"
            >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <!-- <v-toolbar-title>Inicio</v-toolbar-title> -->
                <v-spacer></v-spacer>
               
                  <v-col class="text-right">
                        <v-btn small class="mr-1">Inicio</v-btn>
                        <v-btn small class="mr-1">Nosotros</v-btn>
                        <v-btn small class="mr-1">Contacto</v-btn>
                  </v-col>
               
            </v-app-bar>
        </v-row>
    </div>
</template>