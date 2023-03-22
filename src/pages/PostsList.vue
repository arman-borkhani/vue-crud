<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <search-box @change-search="handleSearch"></search-box>
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
import SearchBox from '../components/SearchBox.vue';

export default {
  components: {
    PostEntry,
    PostsFilter,
    SearchBox
  },
  data() {
    return {
      selectedCategory: null,
      searchQuery: "",
    }
  },
  computed: {
    posts() {
      let posts = this.$store.getters['getPosts'];

      if(this.searchQuery) {
        posts = posts.filter(post => post.title.toLowerCase().startsWith(this.searchQuery.toLowerCase()));
      }

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
    },
    handleSearch(query) {
      this.searchQuery = query;
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