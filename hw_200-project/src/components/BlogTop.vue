<template>
    <div>
        <div class="blog__top" :style="{ backgroundImage: 'url(' + topImg + ')' }">
            <div v-if="topTitle" class="blog__topTitle">
                <div class="blog__title middle__title">{{ title }}</div>
                <div class="blog__text middle__text">{{ text }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BlogTop',
    props: ['topImg', 'title', 'text', 'topTitle']
}
</script>

<style scoped lang="scss">
@import "../assets/style.css";

.blog__top {
    margin-top: 53px;
}
</style>

