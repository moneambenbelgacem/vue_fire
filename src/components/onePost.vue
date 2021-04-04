<template lang="">
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  props: ['post'],
};
</script>
<style lang=""></style>
