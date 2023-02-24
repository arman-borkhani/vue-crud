import { createRouter, createWebHistory } from 'vue-router';

import PostsList from './pages/PostsList.vue';
import PostSingle from './pages/PostSingle.vue';
import PostRegistation from './pages/PostRegistration.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/posts' },
    { path: '/posts', component: PostsList },
    {
      path: '/posts/:id',
      component: PostSingle,
      props: true,
    },
    { path: '/register', component: PostRegistation },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
