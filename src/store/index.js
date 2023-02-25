import { createStore } from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

import posts from '../data/fakePosts.js';
import categories from '../data/fakeCategories';

const store = createStore({
  state() {
    return {
      posts: posts,
      categories: categories
    };
  },
  mutations,
  actions,
  getters
});

export default store;
