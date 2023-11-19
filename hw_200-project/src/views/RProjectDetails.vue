<template>
    <div>
        <BlogTop :topImg="require('@/assets/Details.png')" :topTitle="''" />
        <ProjectDetails :items="getSomeArticles" />
    </div>
</template>
  
<script>
// @ is an alias to /src
import BlogTop from "../components/BlogTop.vue";
import ProjectDetails from "../components/ProjectDetails.vue";
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";

export default {
    name: 'RProjectDetails',
    components: {
        BlogTop,
        ProjectDetails,
    },
    methods: {
        // nextP(data) {
        //     this.SET_SCOPE_PAGE(data)
        //     console.log('ВЫзов nextP(data), значение полученное из TheNumerator: ', data);
        // },
        // someArticles() {
        //     this.SET_FILTR_ARTICLES(this.topArt)
        // },

        ...mapMutations(["SET_ARTICLES", "SET_SCOPE_PAGE", "SET_BLOGS"]),
    },
    computed: {
        ...mapActions(["fetchArticles", "fetchBlog"]),
        ...mapState(["articles", "fArticles"]),
        ...mapGetters(["getSomeArticles", "get3Articles"])
    },

}
</script>
  
