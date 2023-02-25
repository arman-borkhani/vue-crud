export default {
  registerPost(context, payload) {
    context.commit('registerPost', payload);
  },
  deletePost(context, payload) {
    context.commit('deletePost', payload);
  },
  updatePost(context, payload) {
    context.commit('updatePost', payload);
  }
};
