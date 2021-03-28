<template>
  <div class="app">
    <!-- Navbar -->
    <Navbar :username="state.username" />
    <!-- End Navbar -->
    <!-- <router-link to="/">Home</router-link> -->
    <router-view/>
  </div>
</template>

<script>
import { reactive } from 'vue';
import Navbar from './components/Navbar';

export default {
  name: 'App', 
  components: { Navbar },
  setup () {
    const state = reactive({
      username: "_AlanPoo"
    })

    return {
      state
    }
  }
}
</script>


<style lang="scss">
  .app {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: rgb(52, 70, 97);
  }
</style>
