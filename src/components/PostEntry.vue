<template>
  <base-card>
    <article class="post-entry">
      <base-badge :title="category.name"></base-badge>
      <h3 class="post-entry-title">{{ title }}</h3>
      <footer>
        <base-button link :to="link">View Details</base-button>
        <base-button @click="deletePost(id)">Delete</base-button>
      </footer>
    </article>
  </base-card>

</template>

<script>
export default {
  props: ['id', 'title', 'desc', 'categoryId'],
  computed: {
    category() {
      return this.$store.getters.getCatById(this.categoryId);
    },
    link() {
      return this.$route.path + '/' + this.id;
    }
  },
  methods: {
    deletePost(postId) {
      this.$store.dispatch('deletePost', { id: postId });
    }
  }
}
</script>

<style scoped>
.post-entry-title {
  font-size: 1.25rem;
  font-weight: 700;
}

footer {
  display: flex;
  justify-content: flex-end;
}
</style>