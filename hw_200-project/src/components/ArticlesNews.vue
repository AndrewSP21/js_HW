<template>
    <div>
        <section class="articlesNews">
            <div class="arround">
                <div class="articlesNews__title">
                    <div class="articlesNews__h1">Articles & News</div>
                    <div class="articlesNews__h3">It is a long established fact that a reader will be distracted by
                        the
                        of
                        readable content of a page when lookings at its layouts the points of using.</div>
                </div>
            </div>
            <div class="arround">
                <div class="articles">
                    <article v-for="i, id in articles" :key="id" class="articleN ">
                        <div class="articleN_subcontent" v-bind:class="i.lighting">
                            <img v-bind:src="i.src" alt="photo" class="articleN__img">
                            <div class="articleN_data">
                                <div class="articleN__text">{{ i.articleN__text }}</div>
                                <div class="articleN_data_subcontainer">
                                    <div class="articleN__date">{{ i.articleN__date }}</div>
                                    <svg class="articleN__button" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                                        viewBox="0 0 52 53" fill="none">
                                        <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                                        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                            </div>
                            <div class="articleN__designName">{{ i.design }}</div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'ArticlesNews',
    data() {
        return {
            articles: [{
                src: require("../assets/Article2.png"),
                articleN__text: "Let's Get Solution For Building Construction Work",
                articleN__date: "26 December,2022",
                design: "Kitchan Design",
                lighting: ""
            },
            {
                src: require("../assets/Article2.png"),
                articleN__text: "Low Cost Latest Invented Interior Designing Ideas.",
                articleN__date: "22 December,2022",
                design: "Living Design",
                lighting: "articleN__backgroundArticle"
            },
            {
                src: require("../assets/Article3.png"),
                articleN__text: "Best For Any Office & Business Interior Solution",
                articleN__date: "25 December,2022",
                design: "Interior Design",
                lighting: ""
            },
            {
                src: require("../assets/Article4.png"),
                articleN__text: "Let's Get Solution For Building Construction Work",
                articleN__date: "26 December,2022",
                design: "Kitchan Design",
                lighting: ""
            },
            {
                src: require("../assets/Article5.png"),
                articleN__text: "Low Cost Latest Invented Interior Designing Ideas.",
                articleN__date: "22 December,2022",
                design: "Living Design",
                lighting: ""
            },
            {
                src: require("../assets/Article6.png"),
                articleN__text: "Best For Any Office & Business Interior Solution",
                articleN__date: "25 December,2022",
                design: "Interior Design",
                lighting: ""
            }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/style.css"
</style>

