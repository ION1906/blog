<template>
  <div>
    <br><br>
      <h1 class="title">{{ title }}</h1>

    <br><br><br>
    <div class="bg">
      <h2 class="tr">Trending</h2>
      <ul class="list">
          <li v-for="blog in blogs" :key="blog.id">
            <router-link :to="{ name: 'BlogPost', params: { id: blog.id } }" style="text-decoration: none; -webkit-tap-highlight-color: transparent !important;">
              <span class="l-span">
            {{ blog.title | capitalize }}
              </span>
            </router-link>
          </li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'blog',
  data() {
    return {
      title: 'WeBlog',
      blogs: []
    }
  },
  async created() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.blogs = res.data;
    }
    catch (e) {
      console.error(e);
    }
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap');
* {
  margin: 0 !important;
  padding: 0 !important;
}
.title {
  text-align: right;
  color: black !important;
  padding-right: 10.3em !important;
}
.bg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) !important;
  width: 55%;
  height: auto !important;
  padding-top: 2em !important;
  padding-bottom: 2em !important;
  margin-bottom: 2.6em !important;
}
.list {
  list-style-type: none;
}
.list li {
  padding-bottom: 1em !important;
  margin-bottom: 1em !important;
  padding-right: 2em !important;
  border-bottom: 1px solid #e2e8f0;
  color: black !important;
  text-decoration: none !important;
  cursor: default;
  -webkit-tap-highlight-color: transparent !important;
  text-align: right;
}
li a {
color: black !important;
text-decoration: none !important;
-webkit-tap-highlight-color: transparent !important;
}
li i {
  margin-right: 0.2em !important;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent !important;
}
.tr {
  padding-left: 1.2em !important;
  padding-right: 1.2em !important;
  padding-bottom: 2em !important;
  margin-bottom: 1em !important;
  border-bottom: 1px solid #e2e8f0;
  text-align: right;
}
@media screen and (max-width: 1024px) {
  .bg {
    width: 80%;
  }
}
</style>