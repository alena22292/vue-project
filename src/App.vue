<template>
  <div class="app">
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue';

export default {
  name: 'App',
  components: { UserProfile }
}

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #276678;
  margin-top: 20px;
  padding: 30px 40px;
}
</style>
