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

    <TheHeader />
    <main class="main">
      <BlogDetails />
    </main>

    <TheFooter />
    <ProductDetails />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheNumerator from './components/Numerator.vue'
import LatestPost from './components/LatestPost.vue'
import BlogTop from './components/BlogTop.vue'
import ArticlesNews from './components/ArticlesNews.vue'
import ProductDetails from './components/ProductDetails.vue'
import BlogDetails from './components/BlogDetails.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheNumerator,
    LatestPost,
    BlogTop,
    ArticlesNews,
    ProductDetails,
    BlogDetails,

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
