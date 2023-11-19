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
        modernKitchen: [],
        historyKitchen: [],
        buttonsProject: [],
        projects: [],

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
        SET_MODERN_KITCHEN(state, kitchen) {
            state.modernKitchen = kitchen
        },
        SET_PROJECT_HISTORY(state, Khistory) {
            state.historyKitchen = Khistory
        },
        SET_BUTTONS_PROJECT(state, buttons) {
            state.buttonsProject = buttons
        },
        SET_Button_Style_PROJECT(state, idStyle) {
            state.buttonsProject[idStyle[0]].styleClass = idStyle[1]
        },
        SET_PROJECTS(state, projects) {
            state.projects = projects
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
        },
        fetchModernKitchen({ commit }) {
            const mKitchen = [
                {
                    src: require("../assets/Kitchen1.png"),
                    bid__title: 'Modern Kitchan',
                    bid__text: 'Decor / Artchitecture',

                },
                {
                    src: require("../assets/Kitchen2.png"),
                    bid__title: 'Modern Kitchan',
                    bid__text: 'Decor / Artchitecture',

                },
                {
                    src: require("../assets/Kitchen3.png"),
                    bid__title: 'Modern Kitchan',
                    bid__text: 'Decor / Artchitecture',

                },
                {
                    src: require("../assets/Kitchen4.png"),
                    bid__title: 'Modern Kitchan',
                    bid__text: 'Decor / Artchitecture',

                }

            ];

            commit("SET_MODERN_KITCHEN", mKitchen)
        },
        fetchHistoryKitchen({ commit }) {
            const projects = [{
                history__number: 12,
                history__text: 'Years Of Experiance',
            },
            {
                history__number: 85,
                history__text: 'Success Project',
            },
            {
                history__number: 15,
                history__text: 'Active Project',
            },
            {
                history__number: 95,
                history__text: 'Happy CUstomers',
            },
            ];
            commit("SET_PROJECT_HISTORY", projects)
        },
        fetchButtonProjects({ commit }) {
            const buttons = [
                {
                    name: "Bathroom",
                    styleClass: "project__button",
                },
                {
                    name: "Bed Room",
                    styleClass: "project__button project__selected",
                },
                {
                    name: "Kitchan",
                    styleClass: "project__button",
                },
                {
                    name: "Living Area",
                    styleClass: "project__button",
                },

            ];
            commit("SET_BUTTONS_PROJECT", buttons)
        },
        fetchProject({ commit }) {
            const project = [
                {
                    src: require("../assets/Project (1).png"),
                    bid__title: "Minimal Bedroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bed Room",
                    lighting: "visible",
                },
                {
                    src: require("../assets/Project (2).png"),
                    bid__title: "Classic Minimal Bedroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bed Room",
                    lighting: "",
                },
                {
                    src: require("../assets/Project (3).png"),
                    bid__title: "Minimal Bedroom table",
                    bid__text: "Decor / Artchitecture",
                    type: "Bed Room",
                    lighting: "",
                },
                {
                    src: require("../assets/Project (4).png"),
                    bid__title: "Modern Medroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bed Room",
                    lighting: "visible",
                },
                {
                    src: require("../assets/Project (5).png"),
                    bid__title: "Minimal Bedroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bed Room",
                    lighting: "",
                },
                {
                    src: require("../assets/Project (6).png"),
                    bid__title: "Modern Bedroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bed Room",
                    lighting: "",
                },
                {
                    src: require("../assets/Project (7).png"),
                    bid__title: "System Table",
                    bid__text: "Decor / Artchitecture",
                    type: "Bed Room",
                    lighting: "",
                },
                {
                    src: require("../assets/Project (8).png"),
                    bid__title: "Modern Bedroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bed Room",
                    lighting: "",
                },

                {
                    src: "https://i.pinimg.com/originals/fd/50/47/fd5047522460563166943ba2059e82b7.jpg",
                    bid__title: "Minimal Bathroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bathroom",
                    lighting: "visible",
                },
                {
                    src: "https://i.pinimg.com/originals/82/7b/0d/827b0d630792aa701cf6f70ff43a9225.jpg",
                    bid__title: "Classic Minimal Bathroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bathroom",
                    lighting: "",
                },
                {
                    src: "https://santemo.ru/upload/iblock/d92/d921da59b42aecee6b60a161d7bfe567.jpg",
                    bid__title: "Minimal Bathroom table",
                    bid__text: "Decor / Artchitecture",
                    type: "Bathroom",
                    lighting: "",
                },
                {
                    src: "https://www.glickmandesignbuild.com/wp-content/uploads/2022/07/Classic-Charm-iStock-157185449.jpg",
                    bid__title: "Modern Bathroom",
                    bid__text: "Decor / Artchitecture",
                    type: "Bathroom",
                    lighting: "visible",
                },

                {
                    src: "https://kitchensinteriors.ru/wp-content/uploads/bench-barstools-02.jpg",
                    bid__title: "Minimal Kitchan",
                    bid__text: "Decor / Artchitecture",
                    type: "Kitchan",
                    lighting: "visible",
                },
                {
                    src: "https://i5.photo.2gis.com/images/branch/0/30258560053373833_26de.jpg",
                    bid__title: "Classic Minimal Kitchan",
                    bid__text: "Decor / Artchitecture",
                    type: "Kitchan",
                    lighting: "",
                },
                {
                    src: "https://hauslux39.ru/wp-content/uploads/2021/12/nobilia-focus-5-min.jpg",
                    bid__title: "Minimal Kitchan table",
                    bid__text: "Decor / Artchitecture",
                    type: "Kitchan",
                    lighting: "",
                },
                {
                    src: "https://shkaf2000.ru/d/kuhnya_donat.jpg",
                    bid__title: "Modern Kitchan",
                    bid__text: "Decor / Artchitecture",
                    type: "Kitchan",
                    lighting: "visible",
                },

                {
                    src: "https://i.pinimg.com/originals/16/5b/46/165b467b860ec9c7bfce64df3c157ab2.jpg",
                    bid__title: "Minimal Living Area",
                    bid__text: "Decor / Artchitecture",
                    type: "Living Area",
                    lighting: "visible",
                },
                {
                    src: "https://i.pinimg.com/originals/a8/af/68/a8af688288e1b8e5c8aae53128328e1d.jpg",
                    bid__title: "Classic Minimal Living Area",
                    bid__text: "Decor / Artchitecture",
                    type: "Living Area",
                    lighting: "",
                },
                {
                    src: "https://www.maisonvalentina.net/en/inspiration-and-ideas/wp-content/uploads/2018/07/open-concept-living-room_featured-image.jpg",
                    bid__title: "Minimal Living Area table",
                    bid__text: "Decor / Artchitecture",
                    type: "Living Area",
                    lighting: "",
                },
                {
                    src: "https://i.pinimg.com/originals/52/2d/92/522d9262bca83701f1f482af56d70402.jpg",
                    bid__title: "Modern Living Area",
                    bid__text: "Decor / Artchitecture",
                    type: "Living Area",
                    lighting: "visible",
                },
            ];
            commit("SET_PROJECTS", project)

        }
    },
    getters: {
        getSomeArticles(state) {
            return state.articles.slice(state.topArt2[0], state.topArt2[1]);
        },
        get3Articles(state) {
            return state.articles.slice(state.topArt[0], state.topArt[1]);
        },
        getModernKitchen(state) {
            return state.modernKitchen;
        },
        getHistoryKitchen(state) {
            return state.historyKitchen;
        },
        getButtonProjects(state) {
            return state.buttonsProject;
        },
        getProjects(state) {
            return state.projects;
        }
    },
    modules: {
    },

})