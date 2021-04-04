import { ref } from 'vue';
import { db } from './../../firebase/config';

const loadPosts = () => {
  const posts = ref([]);
  const err = ref(null);
  const load = async () => {
    try {
      const res = await db.collection('posts').get();
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (error) {
      err.value = error.message;
    }
  };
  return { posts, err, load };
};
export default loadPosts;
