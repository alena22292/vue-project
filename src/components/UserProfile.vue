<template>
  <div class="user-profile__grid-box">
      <div class="user-profile">
          <div class="user-profile__wrapper">
              <div class="user-profile__flex-box">
                <span class="user-profile__user">@{{ user.username }}</span>
                <span class="user-profile__admin-badge" v-if="user.isAdmin">Admin</span>
              </div>
              <span class="user-profile__block">Followers: {{ followers }}</span>
              <button @click="followUser">Follow</button> <button @click="unFollowUser">Unfollow</button>
              <form action="" class="user-profile__form-create" @submit.prevent="createNewPost">
                  <label for="newPost">New Post</label>
                  <!-- v-model needs for synce up to the given data() -->
                  <textarea id="newPost" rows="4" v-model="newPostContent"></textarea>
                  <div class="user-profile__post-type">
                      <label for="postType">Post Type</label>
                      <select id="postType" v-model="selectedPostType">
                          <!-- :value in this case represents a reference string -->
                          <option :value="option.value" v-for="(option, index) in postType" :key="index">
                              {{ option.name }}
                          </option>
                      </select>
                  </div>
                  <button>
                      Send!
                  </button>
              </form>
          </div>
      </div>
      <div class="user-profile__post-wrapper">
        <PostItem v-for="item in user.posts" :key="item.id" :username="user.username" :post="item" @favourite="toggleFavourite" />
      </div>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  name: 'UserProfile',
  components: { PostItem },
  data() {
    return {
      newPostContent: '',
      selectedPostType: 'instance',
      postType: [
        {value: 'draft', name: 'Draft'},
        {value: 'instance', name: 'Instance'}
      ],
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
    },
    toggleFavourite(id) {
      console.log(`You call a toggle function on #${id} post`);
      return this.user.posts.filter(post => {
          if (post.id === id) {
              post.likes++
          }
      });   
    },
    createNewPost() {
       if (this.newPostContent && this.selectedPostType !== 'draft') {
          this.user.posts.unshift({
              id: this.user.posts.length + 1,
              content: this.newPostContent,
              likes: 0
          });
          this.newPostContent = '';
       }
    }

  },
  // lifecycle hook:
  mounted() {
    setTimeout(() => this.sayHello("Alla"), 2000); 
  }
}
</script>

<style>
/* There is an option to add scoped to the style: <style scoped>; it means that all style defined only for this component */
    .user-profile__grid-box {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 30px;
    }
  .user-profile__admin-badge {
      font-size: 0.6em;
      font-weight: 600;
      background: red;
      color: white;
      border-radius: 5px;
      padding: 4px 6px;
      margin-left: 10px;
  }
  .user-profile__flex-box {
     display: flex;
     align-items: center;
     margin-bottom: 10px;
  }

  .user-profile__wrapper {
    background: #f6f5f5;
    padding: 20px 35px;;
  }

  .user-profile__block {
      display: block;
      margin-bottom: 8px;
  }
  .user-profile__user {
      font-weight: 800;
  }
  /* Form create */
  .user-profile__form-create {
      margin-top: 30px;
  }
  label {
      font-weight: 800;
      margin-right: 15px;
  }
  

</style>
