<template>
    <div class="post-item">
        <div class="post-item__user">@{{ username }}</div>
        <div>{{ post.content }}</div>     
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
  }
}
</script>

<style>
.post-item {
    text-align: left;
    padding-left: 15px;
    margin-bottom: 10px;
    background: #d3e0ea;
    padding: 12px 20px;
    cursor: pointer;
    transition: all 0.25s ease;
}
.post-item:hover {
    transform: scale(1.02);   
}
.post-item__user {
    font-weight: 500;
}
</style>
