export default {
  registerPost(state, payload) {
    const newPost = {
      id: new Date().toISOString(),
      publishDate: new Date().toISOString(),
      title: payload.title,
      description: payload.desc,
      category: payload.cat,
    };
    state.posts.unshift(newPost);
  },
  updatePost(state, payload) {
    const selectedPost = state.posts.find(post => post.id == payload.id);
    selectedPost.title = payload.title;
    selectedPost.description = payload.desc,
    selectedPost.category = payload.cat
  },
  deletePost(state, payload) {
    state.posts = state.posts.filter(post => post.id !== payload.id);
  }
};