<template>
  <header class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item"><router-link to="/">All Posts</router-link></li>
      <li class="nav-item"><router-link to="/register">Register Post</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #260033;
  border-bottom: 1px solid #eee;
  padding: 0.5rem;
}

.navbar-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.nav-item {
  padding: 1rem;
}

.nav-item a {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
}
</style>