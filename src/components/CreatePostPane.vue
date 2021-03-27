<template>
    <!-- :class takes an object with name of classes which will be invoked when condition applies -->
    <form action="" class="user-profile__form-create" @submit.prevent="addPostToList" :class="{'--exceed': countedCharactersPost > 20}">
        <label for="newPost">New Post ({{ countedCharactersPost }}/20)</label>
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
        <button class="btn-submit">
            Send!
        </button>
    </form>
</template>

<script>

export default {
    name: "CreatePostPanel",
    data() {
        return {
            newPostContent: '',
            selectedPostType: 'instance',
            postType: [
                {value: 'draft', name: 'Draft'},
                {value: 'instance', name: 'Instance'}
            ]
        }
    },
    computed: {
        countedCharactersPost() {
            return this.newPostContent.length;
        }
    },
    methods: {
        addPostToList() {
            if (this.newPostContent && this.selectedPostType !== 'draft') {
                this.$emit('add-post', this.newPostContent)
                this.newPostContent = '';
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>
