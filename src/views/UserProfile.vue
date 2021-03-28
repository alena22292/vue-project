<template>
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
import { useRoute } from 'vue-router';
import { users } from '../assets/users';
import PostItem from '../components/PostItem.vue';
import CreatePostPanel from '../components/CreatePostPanel.vue';

export default {
  name: 'UserProfile',
  components: { PostItem, CreatePostPanel },
  setup() {
    const route = useRoute();

    // useRoute allows you to retrieve information from Router;
    const userId = computed(() => route.params.userId);
    // if (userId) fetchUserFromApi(userID);

    const state = reactive({
      followers: 0,
      user: users.users.filter(obj => obj.id == userId.value)[0]
    })

    // computed property: don't accept arguments, the get dynamic values based on other props
    const fullName = computed(() => `${state.user.name} ${state.user.surname}`);

    // methods are static functions used to react to events, they accept arguments
    function followUser() {
      state.followers++;
      console.log(state.user);
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
      userId,
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
</style>
