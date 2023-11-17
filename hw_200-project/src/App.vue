<template>
  <div id="app">
    <TheSlider :items="slides" />
    <!-- --------------------------Let Your Home Be Unique------------------------------------- -->
    <TheHeader />
    <MainPage />
    <!-- <ArticlesNews :topArtQuantity="this.topArt" :articlesList="someArticles" /> -->
    <ArticlesNews :articlesList="get3Articles" />
    <TheFooter />
    <!-- ----------------------------Articles & News----------------------------------------------------- -->
    <TheHeader />
    <BlogTop :topImg="require('@/assets/BlogImg.png')" :title="'Articles & News'" :text="'Home / Blog'" :topTitle="'1'" />
    <LatestPost />
    <!-- <ArticlesNews :topArtQuantity="this.topArt2" /> -->
    <ArticlesNews :articlesList="getSomeArticles" />

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
    <ProjectDetails :items="getSomeArticles"/>
    <TheFooter />

    <!-- <ProductDetails /> -->
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";
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
import TheSlider from "./components/TheSlider.vue";

export default {
  name: "App",
  // data() {
  //   return {
  //     // topArt: [0, 3],
  //     topArt2: [0, 6],
  //     // filtredArticles: [],
  //   };
  // },
  data() {
    return {
      slides: [
        {
          image: 'https://via.placeholder.com/640x360.png?text=Slide+1',
          title: 'Slide 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          image: 'https://via.placeholder.com/640x360.png?text=Slide+2',
          title: 'Slide 2',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          image: 'https://via.placeholder.com/640x360.png?text=Slide+3',
          title: 'Slide 3',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
          image: 'https://via.placeholder.com/640x360.png?text=Slide+4',
          title: 'Slide 4',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        },
      ],
    };
  },
  created() {
    this.fetchArticles;
    this.fetchBlog
  },
  mounted() {

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
    ProjectDetails,
    TheSlider
  },
  methods: {
    nextP(data) {
      // this.topArt2 = [data + 6, data + 6 * 2];
      this.SET_SCOPE_PAGE(data)
      console.log('ВЫзов nextP(data), значение полученное из TheNumerator: ', data);
    },
    someArticles() {
      this.SET_FILTR_ARTICLES(this.topArt)
    },

    ...mapMutations(["SET_ARTICLES", "SET_SCOPE_PAGE", "SET_BLOGS"]),
  },
  computed: {
    ...mapActions(["fetchArticles", "fetchBlog"]),
    ...mapState(["articles", "fArticles"]),
    ...mapGetters(["getSomeArticles", "get3Articles"])
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
