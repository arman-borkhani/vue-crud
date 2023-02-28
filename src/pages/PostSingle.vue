<template>
  <div class="container">
    <div v-if="edit">
      <h1>Edit Post</h1>
      <post-form
        :titleVal="selectedPost.title"
        :descVal="selectedPost.description"
        :catVal="selectedPost.category"
        @submit-form="updatePost"
      ></post-form>
    </div>
    <div v-else>
      <h1>{{ selectedPost.title }}</h1>
      <base-card>
        <base-badge :title="category.name"></base-badge>
        <p>{{ selectedPost.description }}</p>
        <footer>
          <base-button @click="editPost">Edit Post</base-button>
        </footer>
      </base-card>
    </div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue';

export default {
  props: ['id'],
  components: {
    PostForm
  },
  data() {
    return {
      selectedPost: null,
      edit: false
    };
  },
  created() {
    this.selectedPost = this.$store.getters.getPostById(this.id);
  },
  computed: {
    category() {
      return this.$store.getters.getCatById(this.selectedPost.category);
    }
  },
  methods: {
    updatePost(data) {
      const formData = {
        id: this.id,
        title: data.title,
        desc: data.desc,
        cat: data.cat
      };

      this.$store.dispatch('updatePost', formData);
      this.edit = false;
    },

    editPost() {
      this.edit = true;
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.125rem;
  line-height: 1.4;
}

footer {
  display: flex;
  justify-content: flex-end;
}
</style>