<template lang="">
  <h1>List of posts</h1>

  <div v-for="post in posts" :key="post.id">
    <onePost :post="post" />
  </div>
</template>
<script>
import { ref } from 'vue';
import onePost from '../components/onePost';
import { db } from '../firebase/config.js';
export default {
  components: {
    onePost,
  },
  setup() {
    const posts = ref([]);

    const load = async () => {
      const res = await db.collection('posts').get();
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    };
    load();
    return { posts };
  },
};
</script>
<style lang=""></style>
