<template>
  <div class="home">
    <h1>Home</h1>
    <div class="user-list">
      <router-link v-for="user in users.users" :key="user.id" :to="{ name: 'UserProfile', params: { userId: user.id } }">
         <div>{{ user.username }}</div>  
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { users } from '../assets/users';

export default {
  name: 'Home',
  setup(){
    return {
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 50px 5%;
}
.user-list {

}
</style>
