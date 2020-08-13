<template>
  <div id="app">
    <router-view>
<one></one>
      </router-view>
  </div>
</template>

<script>
import one from './components/Main.vue'
export default {
  name: 'App',
  components: {
    'one': one
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap');
* {
  margin: 0 !important;
  padding: 0 !important;
}
body {
  background: #fefefe !important;
}
#app {
  font-family: 'Poppins', sans-serif;
  color: #000;
}
</style>