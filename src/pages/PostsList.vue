<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <search-box @change-search="handleSearch"></search-box>
    <posts-filter @change-category="handleCategoryFilter" :activeCategory="selectedCategory"></posts-filter>
    <div v-if="hasPosts">
      <ul>
        <li v-for="post in paginatedPosts" :key="post.id">
          <post-entry :id="post.id" :title="post.title" :categoryId="post.category"></post-entry>
        </li>
      </ul>
      <pagination-nav :itemsCount="posts.length" :pageSize="pageSize" :currentPage="currentPage" @change-page="handlePageChange"></pagination-nav>
    </div>
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
import PaginationNav from '../components/PaginationNav.vue';
import { paginate } from '../util/paginate';

export default {
  components: {
    PostEntry,
    PostsFilter,
    SearchBox,
    PaginationNav
  },
  data() {
    return {
      selectedCategory: null,
      searchQuery: "",
      pageSize: 4,
      currentPage: 1,
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
    paginatedPosts() {
      return paginate(this.posts, this.currentPage, this.pageSize);
    },
    hasPosts() {
      return this.posts.length;
    }
  },
  methods: {
    handleCategoryFilter(id) {
      this.selectedCategory = id;
      this.currentPage = 1;
    },
    handleSearch(query) {
      this.searchQuery = query;
      this.currentPage = 1;
    },
    handlePageChange(page) {
      this.currentPage = page;
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