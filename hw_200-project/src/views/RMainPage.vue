<template>
    <div>
        <MainPage />
        <ArticlesNews :articlesList="get3Articles" />
    </div>
</template>
  
<script>
// @ is an alias to /src
import MainPage from "../components/MainPage.vue"
import ArticlesNews from "../components/ArticlesNews.vue";
import { mapGetters, mapActions } from "vuex";


export default {
    name: 'RMainPage',
    components: {
        MainPage,
        ArticlesNews
    },
    created() {
        this.fetchArticles;
    },
    computed: {
        ...mapActions(["fetchArticles"]),
        ...mapGetters(["get3Articles"])
    },
}
</script>
  
