<template>
    <!-- :class takes an object with name of classes which will be invoked when condition applies -->
    <form action="" class="user-profile__form-create" @submit.prevent="addPostToList" :class="{'--exceed': countedCharactersPost > 20}">
        <label for="newPost">New Post ({{ countedCharactersPost }}/20)</label>
        <!-- v-model needs for synce up to the given data() -->
        <textarea id="newPost" rows="4" v-model="state.newPostContent"></textarea>
        <div class="d-flex">
            <div class="user-profile__post-type">
                <label for="postType">Post Type</label>
                <select id="postType" v-model="state.selectedPostType">
                    <!-- :value in this case represents a reference string -->
                    <option :value="option.value" v-for="(option, index) in state.postType" :key="index">
                        {{ option.name }}
                    </option>
                </select>
            </div>
            <button class="btn btn-success btn-submit">
                Send!
            </button>
        </div>

    </form>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    name: "CreatePostPanel",
    // Composition API:
    setup(props, ctx) {
        const state = reactive({
            newPostContent: '',
            selectedPostType: 'instance',
            postType: [
                {value: 'draft', name: 'Draft'},
                {value: 'instance', name: 'Instance'}
            ]
        })
        
        const countedCharactersPost = computed(() => state.newPostContent.length);
        function addPostToList() {
            if (state.newPostContent && state.newPostContent.length <= 20 && state.selectedPostType !== 'draft') {
                ctx.emit('add-post', state.newPostContent)
                state.newPostContent = '';
            }
        }

        // Sending to the UI
        return {
            state,
            countedCharactersPost,
            addPostToList
        }
    }
    
}
</script>

<style lang="scss" scoped>
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
          pointer-events: none;
          border: none;
          background-color: red;
          color: white;
        }
      }
  }
</style>
