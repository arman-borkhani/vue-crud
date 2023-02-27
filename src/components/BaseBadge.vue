<template>
  <span class="badge">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #8d006e;
  color: #fff;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  font-size: 0.75rem;
}
</style>