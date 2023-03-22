<template>
  <div class="post-filter-sec">
    <h4>Filter by Category</h4>
    <ul>
      <li>
        <base-button @click="selectCategory(null)" :class="{ outline: true, active: activeCategory === null }" >All Categories</base-button>
      </li>
      <li v-for="category in categories" :key="category.id" :value="category.id">
        <base-button @click="selectCategory(category.id)" :class="{ outline: true, active: activeCategory === category.id }">{{ category.name }}</base-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['change-category'],
  props: ['activeCategory'],
  computed: {
    categories() {
      return this.$store.getters['getCategories'];
    }
  },
  methods: {
    selectCategory(id) {
      this.$emit('change-category', id);
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  display: inline-block;
}

button {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.post-filter-sec {
  margin-bottom: 2.5rem;
}
</style>