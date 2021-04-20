<template lang="">
  <h1>List of posts</h1>
  <div class="row">
    <div class="col-md-6" v-for="post in posts" :key="post.id">
      <onePost :post="post" />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import onePost from '../components/onePost';
import loadPosts from './../composable/posts/getPosts.js';
export default {
  components: {
    onePost,
  },
  setup() {
    const { posts, err, load } = loadPosts();

    load();
    return { posts };
  },
};
</script>
<style lang=""></style>
