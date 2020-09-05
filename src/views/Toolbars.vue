<template>
    <div>

        <v-row class="mt-10">
            <v-toolbar
                color="blue"
                class="white--text"
            >
                <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
                <v-toolbar-title>Inicio</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn text class="white--text">Inicio</v-btn>
                    <v-btn text class="white--text">Nosotros</v-btn>
                    <v-btn text class="white--text">Contactanos</v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </v-row>

        <v-row class="mt-10">
            <v-toolbar 
                extended
                prominent
                color="red">
                <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
                <v-toolbar-title class="white--text">Inicio</v-toolbar-title>
                <v-spacer></v-spacer>
               
                <v-btn text class="white--text py-6">Inicio</v-btn>
                <v-btn text class="white--text py-6">Nosotros</v-btn>
                <v-btn text class="white--text py-6">Contactanos</v-btn>
                <v-btn icon
                    color="white"
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
               
            </v-toolbar>
        </v-row>

        <v-row class="mt-10">
            <v-toolbar 
                dense
                color="red">
                <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
                <v-toolbar-title class="white--text">Inicio</v-toolbar-title>
                <v-spacer></v-spacer>
               
                <v-btn text class="white--text py-6">Inicio</v-btn>
                <v-btn text class="white--text py-6">Nosotros</v-btn>
                <v-btn text class="white--text py-6">Contactanos</v-btn>
                <v-btn icon
                    color="white"
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
               
            </v-toolbar>
        </v-row>

        <v-row class="mt-8">
              <v-card
                class="pa-4"
                flat
                height="300px"
                width="1000"
                img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
              >
                <v-toolbar
                    floating
                >
                    <v-toolbar-title>Inicio</v-toolbar-title>
                </v-toolbar>
              </v-card>
        </v-row>

        <v-row class="primary mt-5" style="margin-bottom: 500px;">
            <v-toolbar
                class="menu"
                height="50"
                dark
                dense
            >
                
                
                <v-img class="logo-pemex" src="../assets/Pemex.png"
                    contain
                ></v-img>


                <v-btn
                    text
                    normal
                    class="text-capitalize"
                >Inicio</v-btn>

                <v-menu
                    open-on-hover="true"
                    close-on-content-click="true"
                    offset-y="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            text
                            v-bind="attrs"
                            v-on="on"
                            normal
                            class="text-capitalize"
                        >Planeación</v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            to="/Asignacion"
                        >
                            <v-list-item-title>Asignación de Requerimientos</v-list-item-title>
                        </v-list-item>
                        <v-list-item
                            to="/Validacion"
                        >
                            <v-list-item-title>Validación de Requerimientos</v-list-item-title>
                        </v-list-item>
                        <v-list-item
                            to="/R_Iniciativa_Contrato"
                        >
                            <v-list-item-title>Relacionar Iniciativa - Contrato</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu
                    open-on-hover="true"
                    close-on-content-click="true"
                    offset-y="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                            text
                            normal
                            class="text-capitalize"
                        >
                          Prevención <br>y Control
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item to="/Contrato-Contratista">
                            <v-list-item-title>
                                Contratos y Contratistas
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item  to="/Convenios">
                            <v-list-item-title>
                                Convenios
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/Ordenes">
                            <v-list-item-title>
                                Órdenes de Servicio
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                 <v-menu
                    open-on-hover="true"
                    close-on-content-click="true"
                    offset-y="true"
                >
                   <template v-slot:activator="{ on, attrs }">
                       <v-btn 
                            v-bind="attrs"
                            v-on="on"
                            text
                            normal
                            class="text-capitalize"
                        >
                            Medición 
                            <br>
                             y 
                            Evaluación
                      </v-btn>
                   </template>
                   <v-list>
                       <v-list-item to="/Estimacion">
                            <v-list-item-title>Estimaciones de Contratos</v-list-item-title>
                       </v-list-item>
                        <v-list-item to="/F6_F7">
                            <v-list-item-title>Cumplimiento de Requisitos</v-list-item-title>
                        </v-list-item>
                         <v-list-item to="/Hallazgos">
                            <v-list-item-title>Interrupciones</v-list-item-title>
                        </v-list-item>
                         <v-list-item to="/Documentacion_Periodica">
                            <v-list-item-title>Documentación Periódica</v-list-item-title>
                        </v-list-item>
                         <v-list-item to="/Verificacion/FSSPA">
                            <v-list-item-title>Verificación Función SSPA</v-list-item-title>
                        </v-list-item>
                         <v-list-item to="/Auditorias">
                            <v-list-item-title>Auditorias</v-list-item-title>
                        </v-list-item>
                   </v-list>
                </v-menu>

                <v-menu
                    open-on-hover="true"
                    close-on-content-click="true"
                    offset-y="true"
                >
                    <template v-slot:activator="{ on, attrs}">
                        <v-btn 
                            v-bind="attrs" 
                            v-on="on"
                            normal
                            text
                            class="text-capitalize"
                            to="/Cerrar-contrato"
                        >
                            Cierre <br> de Contrato
                        </v-btn>
                    </template>
                </v-menu>

                <v-menu
                    open-on-hover="true"
                    close-on-content-click="true"
                    offset-y="true"
                >
                    <template v-slot:activator="{ on, attrs}">
                        <v-btn 
                            v-bind="attrs" 
                            v-on="on"
                            normal
                            text
                            class="text-capitalize"
                        >
                            Cumplimiento <br>y Mejora
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item to="/mapa">
                            <v-list-item-title>
                                Visor Geográfico
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/reportes">
                            <v-list-item-title>
                                Reportes
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/indicador-contratista">
                            <v-list-item-title>
                                Desempeño Integral del Contratista
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                
                <v-menu
                    open-on-hover="true"
                    close-on-content-click="true"
                    offset-y="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            text
                            normal
                            class="text-capitalize"
                            v-bind="attrs"
                            v-on="on"
                        >
                            Administración
                        </v-btn>
                    </template>
                </v-menu>

                <v-menu
                    open-on-hover="true"
                    close-on-content-click="true"
                    offset-y="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            text
                            normal
                            v-bind="attrs"
                            v-on="on"
                            class="text-capitalize"
                        >
                            Ayuda
                        </v-btn>
                    </template>
                </v-menu>

                <v-btn text to="/mi-componente">
                    <v-icon 
                        color="white"
                    >mdi-bell</v-icon>
                </v-btn>

                <v-btn 
                    text
                    normal
                >
                    <v-icon color="white">mdi-account-switch</v-icon>
                </v-btn>

                <v-menu
                    open-on-hover="true"
                    close-on-content-click="true"
                    offset-y="true"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <btn
                            text
                            normal
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon color="white">mdi-account</v-icon>
                        </btn> 
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>
                                
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </v-toolbar>
        </v-row>

    </div>
</template>

<script>
export default {
    data: function() {
        return {
            menus: {
                menuEnlace1: false,
                menuEnlace2: false
            }
        }
    }
}
</script>

<style scoped>

    .logo-pemex {
        width: 130px !important;
      
        height: 50px;
    }

    .menu {
        background-color: #621132 !important;
    }

</style>