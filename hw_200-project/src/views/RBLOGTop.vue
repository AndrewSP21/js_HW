<template>
    <div>
        <BlogTop :topImg="require('@/assets/Blog_details_Banner.png')" :topTitle="''" />
        <BlogDetails />
    </div>
</template>
  
<script>
// @ is an alias to /src
import BlogTop from "../components/BlogTop.vue";
import BlogDetails from "../components/BlogDetails.vue";

// import { mapGetters, mapActions, mapMutations } from "vuex";


export default {
    name: 'RBLOGTop',
    components: {
        BlogTop,
        BlogDetails

    },

}
</script>
  
