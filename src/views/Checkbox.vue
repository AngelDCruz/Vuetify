<template>
  <div>
    <v-row>
      <v-col>
        <v-checkbox
          v-for="tipo of tiposDocumentos"
          :key="tipo"
          :label="tipo"
          dense
          hide-details
          v-model="tiposDocumentosSeleccionados"
          :value="tipo"
        ></v-checkbox>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-combobox
          label="Subdirección"
          outlined
          dense
          v-if="mostrarSubdireccion"
        ></v-combobox>
      </v-col>
       <v-col cols="4">
        <v-combobox
          label="Gerencia"
          outlined
          dense
          v-if="mostrarGerencia"
        ></v-combobox>
      </v-col>
       <v-col cols="4">
        <v-combobox
          label="Autor"
          outlined
          dense
          v-if="mostrarAutor"
        ></v-combobox>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-chip 
          v-for="(tipo, indice) of tiposDocumentosSeleccionados"
          :key="tipo"
          :color="indice === 0 ? 'secondary' : indice === 1 ? 'blue' : 'red'"
          class="mr-2 white--text"
        >{{tipo}}</v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tiposDocumentos: [
        "Operativo",
        "Regulatorio",
        "Extrangero"
      ],
      tiposDocumentosSeleccionados: [],
      mostrarSubdireccion: false,
      mostrarGerencia: false,
      mostrarAutor: false
    }
  },
  watch: {
    tiposDocumentosSeleccionados: {
      handler(valoresNuevo){

        if(valoresNuevo.length === 1 && valoresNuevo.includes("Operativo")){

          this.mostrarSubdireccion = true;
          this.mostrarGerencia = true;
          this.mostrarAutor = false;

        } else if(valoresNuevo.length === 2 && valoresNuevo.includes("Operativo", "Regulatorio")) {

          this.mostrarSubdireccion = true;
          this.mostrarGerencia = true;
          this.mostrarAutor = true;

        } else if(valoresNuevo.length === 3 && 
                  valoresNuevo.includes("Operativo", "Regulatorio", "Extrangero")) {

          this.mostrarSubdireccion = true;
          this.mostrarGerencia = true;
          this.mostrarAutor = true;

        } else if(valoresNuevo.length === 2 && 
                  valoresNuevo.includes("Regulatorio", "Extrangero")) {

          this.mostrarSubdireccion = false;
          this.mostrarGerencia = false;
          this.mostrarAutor = true;

        } else if(valoresNuevo.length === 1 && 
                  valoresNuevo.includes("Regulatorio") ||
                  valoresNuevo.includes("Extrangero")) {

          this.mostrarSubdireccion = false;
          this.mostrarGerencia = false;
          this.mostrarAutor = true;

        } else {

          this.mostrarSubdireccion = false;
          this.mostrarGerencia = false;
          this.mostrarAutor = false;

        }

      }
    }
  }
}
</script>