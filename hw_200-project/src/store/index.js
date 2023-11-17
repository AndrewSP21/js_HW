import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        articles: [],
        fArticles: [],
        topArt: [0, 3],
        topArt2: [0, 6],
        blogArticles: [],
    },
    mutations: {
        SET_ARTICLES(state, articleList) {
            state.articles = articleList;
        },
        SET_SCOPE_PAGE(state, arr) {
            state.topArt2 = [arr[0], arr[1]];
        },
        SET_BLOGS(state, blogList) {
            state.blogArticles = blogList
        },
    },
    actions: {
        fetchArticles({ commit }) {
            console.log('Вызов fetchArticles');
            const articleList =
                [
                    {
                        src: require("../assets/Article1.png"),
                        articleN__text: "1Let's Get Solution For Building Construction Work",
                        articleN__date: "26 December,2022",
                        design: "Kitchan Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article2.png"),
                        articleN__text: "2Low Cost Latest Invented Interior Designing Ideas.",
                        articleN__date: "22 December,2022",
                        design: "Living Design",
                        lighting: "articleN__backgroundArticle",
                    },
                    {
                        src: require("../assets/Article3.png"),
                        articleN__text: "3Best For Any Office & Business Interior Solution",
                        articleN__date: "25 December,2022",
                        design: "Interior Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article4.png"),
                        articleN__text: "4Let's Get Solution For Building Construction Work",
                        articleN__date: "26 December,2022",
                        design: "Kitchan Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article5.png"),
                        articleN__text: "5Low Cost Latest Invented Interior Designing Ideas.",
                        articleN__date: "22 December,2022",
                        design: "Living Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article6.png"),
                        articleN__text: "6Best For Any Office & Business Interior Solution",
                        articleN__date: "25 December,2022",
                        design: "Interior Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article1.png"),
                        articleN__text: "7Let's Get Solution For Building Construction Work",
                        articleN__date: "26 December,2022",
                        design: "Kitchan Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article2.png"),
                        articleN__text: "8Low Cost Latest Invented Interior Designing Ideas.",
                        articleN__date: "22 December,2022",
                        design: "Living Design",
                        lighting: "articleN__backgroundArticle",
                    },
                    {
                        src: require("../assets/Article3.png"),
                        articleN__text: "9Best For Any Office & Business Interior Solution",
                        articleN__date: "25 December,2022",
                        design: "Interior Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article4.png"),
                        articleN__text: "10Let's Get Solution For Building Construction Work",
                        articleN__date: "26 December,2022",
                        design: "Kitchan Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article5.png"),
                        articleN__text:
                            "11Low Cost Latest Invented Interior Designing Ideas.",
                        articleN__date: "22 December,2022",
                        design: "Living Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article6.png"),
                        articleN__text: "12Best For Any Office & Business Interior Solution",
                        articleN__date: "25 December,2022",
                        design: "Interior Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article1.png"),
                        articleN__text: "13Let's Get Solution For Building Construction Work",
                        articleN__date: "26 December,2022",
                        design: "Kitchan Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article2.png"),
                        articleN__text:
                            "14Low Cost Latest Invented Interior Designing Ideas.",
                        articleN__date: "22 December,2022",
                        design: "Living Design",
                        lighting: "articleN__backgroundArticle",
                    },
                    {
                        src: require("../assets/Article3.png"),
                        articleN__text: "15Best For Any Office & Business Interior Solution",
                        articleN__date: "25 December,2022",
                        design: "Interior Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article4.png"),
                        articleN__text: "16Let's Get Solution For Building Construction Work",
                        articleN__date: "26 December,2022",
                        design: "Kitchan Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article5.png"),
                        articleN__text:
                            "17Low Cost Latest Invented Interior Designing Ideas.",
                        articleN__date: "22 December,2022",
                        design: "Living Design",
                        lighting: "",
                    },
                    {
                        src: require("../assets/Article6.png"),
                        articleN__text: "18Best For Any Office & Business Interior Solution",
                        articleN__date: "25 December,2022",
                        design: "Interior Design",
                        lighting: "",
                    },
                ];
            commit("SET_ARTICLES", articleList);

        },
        fetchBlog({ commit }) {
            console.log('Вызов fetchBlog');
            const blogList =
                [
                    {
                        htmlText: `
                        <div class="blog__articleTitle middle__title"><strong>Let’s Get Solution for Building
                                Construction Work</strong>
                        </div>
                        <img src="/BlogArticle1.png" alt="" class="blog__articleImg">
                        <div class="blog__articleDateCrumbs">
                            <div class="blog__articleDate latestPost__date">26 December,2022 </div>
                            <div class="blog__articleCrumbs latestPost__date">Interior / Home / Decore</div>
                        </div>
                        <div class="blog__articleText">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                            to popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injecthumour, or randomised words which
                            don't look even slightly believable.

                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary.

                            <img src="/BlogQuotes.png" alt="" class="blog__articleTextImg">
                        </div>

                    
                    `,
                        src1: require("../assets/BlogArticle1.png"),
                        tag: "Kitchen"
                    }, {
                        htmlText: `
                   
                        <div class="blog__articleTitle middle__title"><strong>Design sprints are great</strong>
                        </div>
                        <img src="/BlogArticle2.png" alt="" class="blog__articleImg">
                        <div class="blog__articleDateCrumbs">
                            <div class="blog__articleDate latestPost__date">26 December,2022 </div>
                            <div class="blog__articleCrumbs latestPost__date">Interior / Home / Decore</div>
                        </div>
                        <div class="blog__articleText">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                            to popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injecthumour, or randomised words which
                            don't look even slightly believable.

                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary.

                            
                        </div>

                    
                    `,

                        tag: "Bedroom"
                    },
                    {
                        htmlText: `
                  
                        <div class="blog__articleTitle middle__title"><strong>Let’s Get Solution for Building
                                Construction Work</strong>
                        </div>
                        <img src="/building.jpg" alt="" class="blog__articleImg">
                        <div class="blog__articleDateCrumbs">
                            <div class="blog__articleDate latestPost__date">26 December,2022 </div>
                            <div class="blog__articleCrumbs latestPost__date">Interior / Home / Decore</div>
                        </div>
                        <div class="blog__articleText">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                            to popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injecthumour, or randomised words which
                            don't look even slightly believable.

                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary.

                            <img src="/BlogQuotes.png" alt="" class="blog__articleTextImg">
                        </div>

                    
                    `,
                        tag: "Building"
                    }, {
                        htmlText: `
                        <div class="blog__articleTitle middle__title"><strong>Design sprints are great</strong>
                        </div>
                        <img src="/architecture.jpg" alt="" class="blog__articleImg">
                        <div class="blog__articleDateCrumbs">
                            <div class="blog__articleDate latestPost__date">26 December,2022 </div>
                            <div class="blog__articleCrumbs latestPost__date">Interior / Home / Decore</div>
                        </div>
                        <div class="blog__articleText">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                            to popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injecthumour, or randomised words which
                            don't look even slightly believable.

                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary.
                            
                        </div>
                    `,
                        tag: "Architecture"
                    },
                    {
                        htmlText: `
                  
                        <div class="blog__articleTitle middle__title"><strong>Let’s Get Solution for Building
                                Construction Work</strong>
                        </div>
                        <img src="/Kitchen_Planning.jpg" alt="" class="blog__articleImg">
                        <div class="blog__articleDateCrumbs">
                            <div class="blog__articleDate latestPost__date">26 December,2022 </div>
                            <div class="blog__articleCrumbs latestPost__date">Interior / Home / Decore</div>
                        </div>
                        <div class="blog__articleText">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                            to popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injecthumour, or randomised words which
                            don't look even slightly believable.

                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary.

                            <img src="/BlogQuotes.png" alt="" class="blog__articleTextImg">
                        </div>

                    
                    `,
                        tag: "Kitchen Planning"
                    },
                    {
                        htmlText: `
                  
                        <div class="blog__articleTitle middle__title"><strong>Let’s Get Solution for Building
                                Construction Work</strong>
                        </div>
                        <img src="/Big_bedroom.jpg" alt="" class="blog__articleImg">
                        <div class="blog__articleDateCrumbs">
                            <div class="blog__articleDate latestPost__date">26 December,2022 </div>
                            <div class="blog__articleCrumbs latestPost__date">Interior / Home / Decore</div>
                        </div>
                        <div class="blog__articleText">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary
                            to popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injecthumour, or randomised words which
                            don't look even slightly believable.

                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary.

                            <img src="/BlogQuotes.png" alt="" class="blog__articleTextImg">
                        </div>

                    
                    `,
                        tag: "Big bedroom"
                    },
                ];
            commit("SET_BLOGS", blogList)
        }
    },
    getters: {
        getSomeArticles(state) {

            return state.articles.slice(state.topArt2[0], state.topArt2[1]);
        },
        get3Articles(state) {

            return state.articles.slice(state.topArt[0], state.topArt[1]);
        }
    },
    modules: {
    },

})