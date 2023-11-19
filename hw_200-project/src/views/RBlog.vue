<template>
    <div>
        <BlogTop :topImg="require('@/assets/BlogImg.png')" :title="'Articles & News'" :text="'Home / Blog'"
            :topTitle="'1'" />
        <LatestPost />
        <ArticlesNews :articlesList="getSomeArticles" />
        <TheNumerator @idxS="nextP" />
    </div>
</template>
  
<script>
// @ is an alias to /src
import BlogTop from "../components/BlogTop.vue";
import LatestPost from "../components/LatestPost.vue";
import TheNumerator from "../components/Numerator.vue";
import ArticlesNews from "../components/ArticlesNews.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";


export default {
    name: 'RBlog',
    components: {
        ArticlesNews,
        BlogTop,
        LatestPost,
        TheNumerator,

    },
    created() {
        this.fetchArticles;
        this.fetchBlog
    },
    computed: {
        ...mapActions(["fetchArticles", "fetchBlog"]),
        ...mapGetters(["getSomeArticles", "get3Articles"])
    },
    methods: {
        nextP(data) {
            this.SET_SCOPE_PAGE(data)
        },
        ...mapMutations(["SET_SCOPE_PAGE"]),
    }
}
</script>
  
