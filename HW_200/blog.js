Vue.component('blog-details', {
    data() {
        return {

            /* blogArticles: [
                {
                    blog__articleTitle: "<strong>Let’s Get Solution for BuildingConstruction Work</strong>",
                    blog__articleImg: 'img/BlogArticle1.png',
                    blog__articleDate: "26 December,2022",
                    blog__articleCrumbs: "Interior / Home / Decore",
                    blog__articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    blog__articleTextImg: '<img src="img/BlogQuotes.png" alt="" class="blog__articleTextImg">',
                    tag: "Kitchen"
                },
                {
                    blog__articleTitle: "<strong>Let’s Get Solution for BuildingConstruction Work</strong>",
                    blog__articleImg: 'img/BlogArticle1.png',
                    blog__articleDate: "26 December,2022",
                    blog__articleCrumbs: "Interior / Home / Decore",
                    blog__articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    blog__articleTextImg: '<img src="img/BlogQuotes.png" alt="" class="blog__articleTextImg">',
                    tag: "Kitchen"
                },
                {
                    blog__articleTitle: "<strong>Let’s Get Solution for BuildingConstruction Work</strong>",
                    blog__articleImg: 'img/BlogArticle1.png',
                    blog__articleDate: "26 December,2022",
                    blog__articleCrumbs: "Interior / Home / Decore",
                    blog__articleText: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.  Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    blog__articleTextImg: '<img src="img/BlogQuotes.png" alt="" class="blog__articleTextImg">',
                    tag: "Kitchen"
                }
            ], */
            blogArticles2: [
                {
                    htmlText: `
                  
                        <div class="blog__articleTitle middle__title"><strong>Let’s Get Solution for Building
                                Construction Work</strong>
                        </div>
                        <img src="img/BlogArticle1.png" alt="" class="blog__articleImg">
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

                            <img src="img/BlogQuotes.png" alt="" class="blog__articleTextImg">
                        </div>

                    
                    `,
                    tag: "Kitchen"
                }, {
                    htmlText: `
                   
                        <div class="blog__articleTitle middle__title"><strong>Design sprints are great</strong>
                        </div>
                        <img src="img/BlogArticle2.png" alt="" class="blog__articleImg">
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
                        <img src="img/building.jpg" alt="" class="blog__articleImg">
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

                            <img src="img/BlogQuotes.png" alt="" class="blog__articleTextImg">
                        </div>

                    
                    `,
                    tag: "Building"
                }, {
                    htmlText: `
                   
                        <div class="blog__articleTitle middle__title"><strong>Design sprints are great</strong>
                        </div>
                        <img src="img/architecture.jpg" alt="" class="blog__articleImg">
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
                        <img src="img/Kitchen_Planning.jpg" alt="" class="blog__articleImg">
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

                            <img src="img/BlogQuotes.png" alt="" class="blog__articleTextImg">
                        </div>

                    
                    `,
                    tag: "Kitchen Planning"
                },
                {
                    htmlText: `
                  
                        <div class="blog__articleTitle middle__title"><strong>Let’s Get Solution for Building
                                Construction Work</strong>
                        </div>
                        <img src="img/Big_bedroom.jpg" alt="" class="blog__articleImg">
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

                            <img src="img/BlogQuotes.png" alt="" class="blog__articleTextImg">
                        </div>

                    
                    `,
                    tag: "Big bedroom"
                },
            ],
            buttonTags: [
                {
                    name: 'Kitchen',
                    light: 'tag__batton'
                },
                {
                    name: 'Bedroom',
                    light: 'tag__batton'
                },
                {
                    name: 'Building',
                    light: 'tag__batton'
                },
                {
                    name: 'Architecture',
                    light: 'tag__batton'
                },
                {
                    name: 'Kitchen Planning',
                    light: 'tag__batton'
                },
                {
                    name: 'Big bedroom',
                    light: 'tag__batton'
                },


            ],
            filterBlogArticles: []

        }
    },
    /* template: `<div>
    <div v-for='i,id in blogArticles' :key="id" class="blog__article">
    <div class="blog__articleTitle middle__title"><div v-html=i.blog__articleTitle></div>
    </div>
    <img v-bind:src="i.blog__articleImg" alt="" class="blog__articleImg">
    <div class="blog__articleDateCrumbs">
        <div class="blog__articleDate latestPost__date">{{i.blog__articleDate}}</div>
        <div class="blog__articleCrumbs latestPost__date">{{i.blog__articleCrumbs}}</div>
    </div>
    <div class="blog__articleText">{{i.blog__articleText}}
    <div v-html=i.blog__articleTextImg></div>
    </div>
    </div>
</div>
`, */
    template: `<div class="blog__details">
    <section class="blog__content">
        <div v-for='(i,id) in blogArticles2' :key="id" v-html=i.htmlText class="blog__article"></div>
    </section>
    <section class="blog__tags">
        <h1 class="tag bid__title"><strong>Tags</strong></h1>
        <div class="tag__buttons">
        <div @click="filter(id)" v-for='(i,id) in buttonTags' :key="id" v-bind:class=i.light>{{i.name}}</div>
        </div>
    </section>
</div>
`,
    methods: {
        filter(id) {
            if (this.buttonTags[id].light == 'tag__batton batton_bacground') {
                this.buttonTags[id].light = 'tag__batton'
                if (this.filterBlogArticles.length > this.blogArticles2.length) {
                    this.blogArticles2 = this.filterBlogArticles.slice(0);
                }
            } else {

                //Приходится два массива использовать, чтобы запоминать предыдущее состояние
                if (this.filterBlogArticles.length > this.blogArticles2.length) {
                    this.blogArticles2 = this.filterBlogArticles.slice(0);
                    this.filterBlogArticles = this.blogArticles2.slice(0);
                    this.blogArticles2 = this.blogArticles2.filter((article) => article.tag == this.buttonTags[id].name)
                } else {
                    this.filterBlogArticles = this.blogArticles2.slice(0);
                    this.blogArticles2 = this.blogArticles2.filter((article) => article.tag == this.buttonTags[id].name)
                };

                for (let i = 0; i < this.buttonTags.length; i++) {
                    this.buttonTags[i].light = 'tag__batton'
                }
                this.buttonTags[id].light = 'tag__batton batton_bacground'
            }




        },

    },

})

