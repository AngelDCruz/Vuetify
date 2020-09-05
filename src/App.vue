<template>
 
  <v-app
    id="aplicacion"
  >
    <Navegacion fixed></Navegacion>
  
    <v-main>
      <v-container>
          <router-view/>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>

import Navegacion from '@/components/Navegacion'

export default {
  name: 'App',
  components: {
    Navegacion
  },
};
</script>

<style scoped>
  .contenedor-principal{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>
