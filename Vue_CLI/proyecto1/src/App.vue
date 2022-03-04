<template>
  <div id="App" class="container mt-3  text-center">
    <CabeceraC></CabeceraC>
    <br>
    <ListaC></ListaC>
  </div>
</template>

<script>
import CabeceraC from './components/CabeceraC.vue'
import ListaC from './components/ListaC.vue'

export default {
  name: 'App',
  components: {
    CabeceraC,
    ListaC
  }
}
</script>