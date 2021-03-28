<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid d-flex">
      <router-link to='/'>
        <div class="navbar-brand">Messanger</div>
      </router-link>
      <div class="navbar-username">
         {{ username }}
      </div>
    </div>
  </nav>
    
</template>

<script>
export default {
    name: "Navbar",
    props: {
        username: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    margin-bottom: 30px;
    background-color: palegreen;
    .navbar-brand {
    font-weight: bold;
    font-size: 1.6rem;
    }
    .navbar-username {
    margin-right: 30px;
    font-weight: bold;
    }
}
</style>
