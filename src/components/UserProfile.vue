<template>
  <div class="user-profile">
    <h1>Hello, @{{ user.username }} - {{ fullName }}</h1> <span class="user-profile__admin-badge" v-if="user.isAdmin">Admin</span>
    <p>Followers: {{ followers }}</p>
    <button @click="followUser">Follow</button> <button @click="unFollowUser">Unfollow</button>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
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
  // watch needed to compare the prev and current state of the object:
  watch: {
    followers(currentCount, prevCount) {
      if (currentCount > prevCount) {
        console.log(`${this.user.name}, you have just gained a new friend!`)
      } else {
        console.log(`${this.user.name}, you have just lost one friend!`)
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
    },
    sayHello(name) {
      console.log(`Say hello to a new friend ${name} in 2 sec`);
    }
  },
  // lifecycle hook:
  mounted() {
    setTimeout(() => this.sayHello("Alla"), 2000);
    
  }
}
</script>

<style>
  .user-profile__admin-badge {
      background: red;
      color: white;
      border-radius: 5px;
      padding: 4px 6px;
  }
</style>
