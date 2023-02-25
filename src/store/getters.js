export default {
  getPosts(state) {
    return state.posts;
  },
  hasPosts(state) {
    return state.posts && state.posts.length > 0;
  },
  getPostById: (state) => (id) => {
    return state.posts.find(post => post.id == id);
  },
  getCategories(state) {
    return state.categories;
  },
  getCatById: (state) => (id) => {
    return state.categories.find(cat => cat.id === id);
  }
};