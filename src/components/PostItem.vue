<template>
    <div class="post-item">
        <div class="post-item__user">@{{ username }}</div> 
        <div>{{ post.content }}</div> 
        <span class="post-item__heart" @click="favouritePost(post.id)">{{ post.likes }} <i class="far fa-heart"></i></span>    
    </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
      username: {
          type: String,
          required: true
      },
      post: {
          type: Object,
          required: true
      }
  },
  methods: {
      favouritePost(id) {
          this.$emit('favourite', id);
      }
  }
}
</script>

<style>
.post-item {
    position: relative;
    text-align: left;
    padding-left: 15px;
    margin-bottom: 10px;
    background: #d3e0ea;
    padding: 12px 20px;
    cursor: pointer;
    /* transition: all 0.25s ease; */
}
.post-item:hover {
    /* transform: scale(1.02);    */
    box-shadow: 0px 1px 3px rgba(0, 140, 186, 0.5);
}
.post-item__user {
    font-weight: 500;
}
.post-item__heart {
   position: absolute;
   right: 10px;
   bottom: 10px;
}
.post-item__heart i:hover {
   color: red;
   font-weight: 600;
}

</style>
