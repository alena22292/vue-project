<template>
  <div class="app">
    <h1>Hello, @{{ user.username }} - {{ fullName }}</h1> 
    <p>Followers: {{ followers }}</p>
    <button @click="followUser">Follow</button> <button @click="unFollowUser">Unfollow</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_AlenaGr',
        name: 'Alena',
        surname: 'Gritsiuk',
        email: 'alena22292@mail.ru',
        isAdmin: true
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.name} ${this.user.surname}`;
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    unFollowUser() {
      if (this.followers >= 1) {
        this.followers--;
      } else {
        this.followers = 0;
      }
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2127d2;
  margin-top: 60px;
}
</style>
