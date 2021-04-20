<template lang="">
  <div>
    <h1>hello to my public key</h1>
    <h2 @click="show = !show">{{ post.title }}</h2>
    <div v-if="show">
      <div class="well">
        <p>{{ extract }}</p>
      </div>
      <div class="well">
        <span v-for="tag in post.tags" class="badge badge-primary">
          #{{ tag }}
        </span>
      </div>
      <div class="my-3">
        <router-link
          :to="{ name: 'showpost', params: { id: post.id } }"
          class="btn btn-sm btn-info"
          >Show</router-link
        >
        <router-link :to="{ name: 'Home' }" class="btn btn-sm btn-warning ml-2"
          >Edit</router-link
        >
        <button class="btn btn-sm btn-danger ml-2">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, onUpdated, ref, onUnmounted } from 'vue';
export default {
  props: ['post'],
  setup(props) {
    const extract = computed(() => props.post.content.substring(0, 3) + '...');

    const show = ref(true);
    return { extract, show };
  },
};
</script>
<style lang=""></style>
