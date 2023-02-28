<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,400;0,700;1,500&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

.container {
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
