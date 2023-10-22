<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <BlogTop />
      <LatestPost />
      <ArticlesNews />
      <TheNumerator />
    </main>

    <TheFooter />


  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheNumerator from './components/Numerator.vue'
import LatestPost from './components/LatestPost.vue'
import BlogTop from './components/BlogTop.vue'
import ArticlesNews from './components/ArticlesNews.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheNumerator,
    LatestPost,
    BlogTop,
    ArticlesNews

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
