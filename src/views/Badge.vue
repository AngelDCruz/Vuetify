<template>
    <div>
        <v-row class="mt-10">

                <v-badge
                    :avatar="false"
                    bordered
                    top
                    color="indigo"
                    content="games"
                    class="mr-16"
                >Honor</v-badge>

                <v-badge
                    overlap
                    default
                    class="mr-16"
                >
                    Fifa
                </v-badge>

                <v-badge
                    icon="mdi-access-point-network"
                    class="mr-16"
                    hidden
                >
                    America
                </v-badge>

        </v-row>
        <v-row class="mt-10">
            <v-toolbar>
               <v-tabs grow>
                    <v-tab>
                        <v-badge
                            icon="mdi-circle"
                            left
                            color="cyan"
                        >inicio</v-badge>
                   </v-tab>
                   <v-tab>
                       <v-badge
                        content="10"
                        inline
                       >
                            Nosotros
                       </v-badge>
                   </v-tab>
                   <v-tab>
                       <v-badge 
                        icon="mdi-account-circle"
                       >
                           contacto
                       </v-badge>
                   </v-tab>
                   <v-tab>
                       <v-badge 
                        content="Angel Ortiz"
                        bottom
                       >Usuario</v-badge>
                   </v-tab>
               </v-tabs>
            </v-toolbar>
        </v-row>
        <v-row justify="space-around" class="mt-10">
            <v-btn
                color="blue accent-2"
                class="white--text"
                v-on:click="incrementar_notificacion"
            >
                Incrementar Notificacion
            </v-btn>
             <v-btn
                color="deep-orange accent-4"
                class="white--text"
                v-on:click="reiniciar_notificacion"
             >
                Reiniciar Notificacion
            </v-btn>
            <v-badge
                color="red"
                overlap
                v-bind:content="notificacion"
                v-bind:value="notificacion"
            >
                <v-icon large>mdi-alarm-light</v-icon>
            </v-badge>
        </v-row>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            notificacion: 0
        }
    },
    methods: {
        incrementar_notificacion: function(){
            this.notificacion++;
        },
        reiniciar_notificacion: function(){
            this.notificacion = 0;
        }
    }
}
</script>