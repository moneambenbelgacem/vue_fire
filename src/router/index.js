import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import Show from '../views/Show.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Posts,
  },
  {
    path: '/blog/:id',
    name: 'showpost',
    component: Show,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
