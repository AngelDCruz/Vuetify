<template>
    <v-row justify="center">
        <v-col cols="6">
            <h4 class="text-center white--text primary py-3">Validar fecha</h4>
            <v-row>
               <v-col cols="6">
                    <v-layout
                        row 
                        wrap
                    >
                        <v-date-picker
                            locale="es-mx"
                        ></v-date-picker>
                    </v-layout>
               </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

export default {
    
}

</script>