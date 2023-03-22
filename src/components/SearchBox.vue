<template>
  <div>
    <input class="form-control" type="text" v-model="searchValue" @input="handleChange" placeholder="Search...">
  </div>
</template>

<script>
export default {
  emits: ['change-search'],
  data() {
    return {
      searchValue: "",
    }
  },
  methods: {
    handleChange() {
      this.$emit('change-search', this.searchValue);
    }
  }
}
</script>

<style scoped>
.form-control {
  display: block;
  width: 100%;
  height: calc(2em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  margin-bottom: 1.5rem;
}

.form-control:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}
</style>