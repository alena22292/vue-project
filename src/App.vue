<template>
  <!-- Navbar -->
  <Navbar :username="state.username" />
  <!-- End Navbar -->
  <!-- <router-link to="/">Home</router-link> -->
  <router-view/>
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
</style>
