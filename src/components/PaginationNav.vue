<template>
  <nav>
    <ul>
      <li v-for="page in pages" :key="page">
        <button :class="{ active: page === currentPage }" @click="changePage(page)">{{ page }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import _ from "lodash";

export default {
  emits: ['change-page'],
  props: ['itemsCount', 'pageSize', 'currentPage'],
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.itemsCount / this.pageSize);
      if (pagesCount === 1) return null;
      return _.range(1, pagesCount + 1);
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('change-page', pageNumber);
    }
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }

  button {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    border: 1px solid #8d006e;
    line-height: normal;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin: 0.25rem;
    color: #8d006e;
    font-weight: bold;
    cursor: pointer;
  }

  button.active {
    background-color: #8d006e;
    color: #fff;
  }
</style>