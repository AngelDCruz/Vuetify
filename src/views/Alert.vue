<template>
    <div class="mt-16">
        <v-alert
            color="red"
            icon="mdi-vuetify"
            border="bottom"
            prominent
            class="white--text text-center"
        >Esto es un mensaje de alerta</v-alert>
        <hr>
        <v-alert
            color="orange" 
            border="top"
            dense
            class="white--text text-center"
        >Esto es un mensaje de alerta</v-alert>
        <hr>
        <v-alert
            color="blue"
            border="right"
            outlined
            class="text-center"
        >Esto es un mensaje de alerta</v-alert>
        <hr>
        <v-alert 
            color="purple"
            class="text-center white--text"
            text
        >
            Esto es un mensaje de texto
        </v-alert>
        <hr>
        <v-alert
            color="yellow"
            tile
            class="white--text text-center"
        >Esto es un mensaje de texto</v-alert>
        <hr>
        <v-alert
            color="orange"
            dismissible
            class="white--text text-center"
            elevation="10"
        >
            Esto es un mensaje de texto
        </v-alert>
        <hr>
        <v-alert
            max-width="500"
            max-height="300"
            color="blue"
            class="white--text text-center"
            :tag="'p'"
            :value="true"
        >
            Esto es un mensaje de texto
        </v-alert>
        <hr>
        <v-alert
            max-width="1000"
            max-height="300"
            color="yellow"
            class="white--text text-center"
            icon="material-icons"
            :colored-border="false"
        >
            Esto es un mensaje de texto
        </v-alert>
    </div>
</template>

<style scoped>
    hr{
        margin: 20px 0;
        border: 1px solid rgba(218, 218, 218, 0.2);
    }
</style>
