<template>
  <!-- Navbar -->
  <Navbar :username="state.user.username" />
  <!-- End Navbar -->
  <div class="user-profile__grid-box">
      <div class="user-profile">
          <div class="user-profile__wrapper">
              <div class="user-profile__flex-box">
                <span class="user-profile__user">@{{ state.user.username }}</span>
                <span class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</span>
              </div>
              <span class="user-profile__block">Followers: {{ state.followers }}</span>
              <button @click="followUser">Follow</button> <button @click="unFollowUser">Unfollow</button>
              <CreatePostPanel @add-post="createNewPost" /> 
          </div>
      </div>
    
      <div class="user-profile__post-wrapper">
        <PostItem v-for="item in state.user.posts" :key="item.id" :username="state.user.username" :post="item" @favourite="toggleFavourite" />
      </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import PostItem from './PostItem.vue';
import Navbar from './Navbar.vue';
import CreatePostPanel from './CreatePostPanel.vue';

export default {
  name: 'UserProfile',
  components: { PostItem, Navbar, CreatePostPanel },
  setup() {
    const state = reactive({
      followers: 0,
      user: {
        id: 1,
        username: '_AlenaGr',
        name: 'Alena',
        surname: 'Gritsiuk',
        email: 'alena22292@mail.ru',
        isAdmin: true,
        posts: [
            {id: 1, content: 'Hi there, I am using this new framework. IT is cool!', likes: 0},
            {id: 2, content: 'This framework called VueJS', likes: 0},
            {id: 3, content: 'I have a list awesome tools, if you want me to share them, please send pm', likes: 0} 
        ]
      }
    })

    // computed property: don't accept arguments, the get dynamic values based on other props
    const fullName = computed(() => `${state.user.name} ${state.user.surname}`);

    // methods are static functions used to react to events, they accept arguments
    function followUser() {
      state.followers++;
    }
    function unFollowUser() {
      if (state.followers >= 1) {
        state.followers--;
      } else {
        state.followers = 0;
      }
    }
    function toggleFavourite(id) {
      console.log(`You call a toggle function on #${id} post`);
      return state.user.posts.filter(post => {
          if (post.id === id) {
              post.likes++
          }
      }) 
    }
    function createNewPost(newContent) {
        state.user.posts.unshift({
            id: state.user.posts.length + 1,
            content: newContent,
            likes: 0  
       })
    }

    return {
      state,
      fullName,
      followUser,
      unFollowUser,
      toggleFavourite,
      createNewPost
    }
  }


  // watch needed to compare the prev and current state of the object:
  // watch: {
  //   followers(currentCount, prevCount) {
  //     if (currentCount > prevCount) {
  //       console.log(`${state.user.name}, you have just gained a new friend!`)
  //     } else {
  //       console.log(`${state.user.name}, you have just lost one friend!`)
  //     }
  //   }
  // },
  
  // lifecycle hook:
  // mounted() {
  //   setTimeout(() => state.sayHello("Alla"), 2000); 
  // }
}
</script>

<style lang="scss" scoped>
/* There is an option to add scoped to the style: <style scoped>; it means that all style defined only for this components */
    .user-profile__grid-box {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 30px;
        padding: 30px 40px;
        .user-profile__wrapper {
          background: #f6f5f5;
          padding: 20px 35px;
          .user-profile__flex-box {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            .user-profile__admin-badge {
                font-size: 0.6em;
                font-weight: 600;
                background: red;
                color: white;
                border-radius: 5px;
                padding: 4px 6px;
                margin-left: 10px;
            }
          }
          .user-profile__block {
              display: block;
              margin-bottom: 8px;
          }
        }
    }
  .user-profile__user {
      font-weight: 800;
  }
  /* Button */
  button {
    cursor: pointer;
  }
  /* Form create */
  .user-profile__form-create {
      margin-top: 30px;
      label {
          font-weight: 800;
          margin-right: 15px;
      }
      &.--exceed {
        color: red;
        .btn-submit {
          cursor: not-allowed;
          border: none;
          background-color: red;
          color: white;
          pointer-events: none;
        }
      }
  }
</style>
