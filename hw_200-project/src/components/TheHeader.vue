<template>
    <div>
        <div class="arround">
            <header class="header main_size">
                <div class="logo">
                    <router-link to="/">
                        <img v-if="image1" :src="image1" alt="logo" class="logo__img">
                    </router-link>

                    <router-link class="no_underline" to="/">
                        <div class="logo__text">Interno</div>
                    </router-link>

                </div>
                <div class="nav">
                    <router-link class="nav1" to="/">Home</router-link>
                    <router-link class="nav2" to="/RProject">Project</router-link>
                    <router-link class="nav3" to="/RBlog">Blog</router-link>
                </div>
            </header>
        </div>




    </div>
</template>

<script>

export default {
    name: 'TheHeader',
    data() {
        return {
            image1: require("../assets/Logo.png")
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/style.css";

.no_underline {
    text-decoration: none;
}
</style>

