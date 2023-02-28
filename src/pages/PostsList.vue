<template>
  <div class="container">
    <h1>Latest Posts</h1>
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

export default {
  components: {
    PostEntry
  },
  computed: {
    posts() {
      return this.$store.getters['getPosts'];
    },
    hasPosts() {
      return this.$store.getters['hasPosts'];
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