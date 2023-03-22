<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <posts-filter @change-category="handleCategoryFilter" :activeCategory="selectedCategory"></posts-filter>
    <ul v-if="hasPosts">
      <li v-for="post in posts" :key="post.id">
        <post-entry :id="post.id" :title="post.title" :categoryId="post.category"></post-entry>
      </li>
    </ul>
    <div v-else>
      <base-card>
        Sorry, no results were found.
      </base-card>
    </div>
  </div>
</template>

<script>
import PostEntry from '../components/PostEntry.vue';
import PostsFilter from '../components/PostsFilter.vue';

export default {
  components: {
    PostEntry,
    PostsFilter
  },
  data() {
    return {
      selectedCategory: null,
    }
  },
  computed: {
    posts() {
      let posts = this.$store.getters['getPosts'];

      if(this.selectedCategory) {
        posts = posts.filter(post => post.category === this.selectedCategory)
      }

      return posts;
    },
    hasPosts() {
      return this.posts.length;
    }
  },
  methods: {
    handleCategoryFilter(id) {
      this.selectedCategory = id;
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
</style>