<template>
  <div id="app">
    <!-- --------------------------Let Your Home Be Unique------------------------------------- -->
    <TheHeader />
    <MainPage />
    <ArticlesNews :topArtQuantity="this.topArt" />
    <TheFooter />
    <!-- ----------------------------Articles & News----------------------------------------------------- -->
    <TheHeader />
    <BlogTop :topImg="require('@/assets/BlogImg.png')" :title="'Articles & News'" :text="'Home / Blog'" :topTitle="'1'" />
    <LatestPost />
    <ArticlesNews :topArtQuantity="this.topArt2" />
    <TheNumerator @idxS="nextP" />
    <TheFooter />
    <!-- -------------------------------Let’s Get Solution for Building Construction Work------------ -->
    <TheHeader />
    <BlogTop :topImg="require('@/assets/Blog_details_Banner.png')" :topTitle="''" />
    <BlogDetails />
    <TheFooter />

    <!-- ---------------------------Our Project--------------------------------------------------- -->
    <TheHeader />
    <BlogTop :topImg="require('@/assets/Project.png')" :title="'Our Project'" :text="'Home / Project'" :topTitle="'1'" />
    <ProjectSelector />
    <TheNumerator />
    <TheFooter />

    <!-- -------------------------------Minimal Look Bedrooms------------------------------------- -->
    <TheHeader />
    <BlogTop :topImg="require('@/assets/Details.png')" :topTitle="''" />
    <ProjectDetails />
    <TheFooter />

    <!-- <ProductDetails /> -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheNumerator from "./components/Numerator.vue";
import LatestPost from "./components/LatestPost.vue";
import BlogTop from "./components/BlogTop.vue";
import ArticlesNews from "./components/ArticlesNews.vue";
// import ProductDetails from './components/ProductDetails.vue'
import BlogDetails from "./components/BlogDetails.vue";
import MainPage from "./components/MainPage.vue";
import ProjectSelector from "./components/ProjectSelector.vue";
import ProjectDetails from "./components/ProjectDetails.vue";

export default {
  name: "App",
  data() {
    return {
      topArt: [0, 3],
      topArt2: [0, 6],
    };
  },
  components: {
    TheHeader,
    TheFooter,
    TheNumerator,
    LatestPost,
    BlogTop,
    ArticlesNews,
    // ProductDetails,
    BlogDetails,
    MainPage,
    ProjectSelector,
    ProjectDetails
  },
  methods: {
    nextP(data) {
      this.topArt2 = [data + 6, data + 6 * 2];
    },
  },
};
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
