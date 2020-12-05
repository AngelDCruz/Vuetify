<template>
  <header class="header-contenedor">
    
     <v-app-bar app color="white" 
       class="white--text">
          
          <v-spacer></v-spacer>

          <v-app-bar-nav-icon>
            <v-img src="../assets/logo.png" width="30" height="30"></v-img>
          </v-app-bar-nav-icon>

          <v-spacer></v-spacer>

          <v-btn class="mr-2" color="secondary" depressed :to="{ name: 'Inicio' }" small>Inicio</v-btn>
          
          <v-btn class="mr-2" color="secondary" depressed :to="{ name: 'Alertas' }" small>Alertas</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'AspectRatios' }" small>AspectRatios</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Avatar' }" small>Avatar</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Badge' }" small>Badge</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Banners' }" small>Banners</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'AppBars' }" small>AppBars</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Toolbars' }" small>Toolbars</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Systembars' }" small>System bars</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Bottomnavigation' }" small>Bottom navigation</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Datepicker' }" small>Datepicker</v-btn>
          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Input' }" small>Input</v-btn>

          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Datepicker' }" small>Input</v-btn>
          <v-btn class="mr-2"  color="secondary" depressed :to="{ name: 'Checkbox' }" small>Checkbox</v-btn>
     
      <v-spacer></v-spacer>

    </v-app-bar>
  </header>
</template>

<script>
  export default {
    name: 'Navegacion',
  }
</script>

<style scope>
    .header-contenedor{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .header-contenedor img{
      display: block;
    }

    .menu{
      list-style-type: none;
    }

</style>
