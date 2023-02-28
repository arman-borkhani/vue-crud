<template>
  <div class="container">
    <h1>Add New Post</h1>
    <post-form @submit-form="savePost"></post-form>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue';

export default { 
  components: {
    PostForm
  },
  methods: {
    savePost(data) {
      const formData = {
        title: data.title,
        desc: data.desc,
        cat: data.cat
      };

      this.$store.dispatch('registerPost', formData);
      this.$router.replace('/posts');
    },
  }
}
</script>