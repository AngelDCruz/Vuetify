<template>
    <div>
        <v-row>
            <v-col cols="4">
                <h3>Text field</h3>
                <button type="button" class="mb-4" @click="CambiarNumero">Moneda</button>
                <v-text-field
                    label="Monto del Convenio ($)"
                    v-model="numero"
                    autocomplete="off"
                    outlined
                    dense
                    v-currency
                    ref="montoInput"
                ></v-text-field>
                {{QuitandoComandasYPrefijo}}
            </v-col>
        </v-row>

        <v-divider></v-divider>

         <v-row>
            <v-col cols="4">
                <h3>Checkbox</h3>
                <v-checkbox
                    v-for="color of datosCheckbox"
                    :key="color.id"
                    :value="color.id"
                    :label="color.name"
                    v-model="coloresSeleccionados"
                ></v-checkbox>
                <div>
                    {{coloresSeleccionados}}
                </div>
                <hr class="my-3">
                <v-btn
                    medium
                    color="red"
                    class="white--text"
                    @click="simulacionSeleccionDefecto"
                >
                    Seleccionar Todos
                </v-btn>
            </v-col>
        </v-row>

    </div>    
</template>

<script>

import { setValue, getValue } from "vue-currency-input";

export default {
    data(){
       return {
            numero: "1583",
            reglaNumero: [
                (v) => !!v || "Campo requerido *"
            ],
            datosCheckbox: [
                {
                    id: 1,
                    name: 'rojo'
                },
                {
                    id: 2,
                    name: 'amarrillo'
                },
            ],
            coloresSeleccionados: []
       }
    },
    methods: {
        CambiarNumero(){
        
            setValue(this.$refs.montoInput, getValue(this.$refs.montoInput) + 674);

        },
        simulacionSeleccionDefecto(){

            this.coloresSeleccionados = this.datosCheckbox.map(color => color.id);

        }
    },
    computed: {
        QuitandoComandasYPrefijo(){
            return this.numero.replace('$', "").replace(",", "");
        }
    },
    mounted(){

        // this.coloresSeleccionados.push(this.datosCheckbox[1].id);

    }
}

</script>

