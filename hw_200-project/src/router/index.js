import Vue from 'vue'
import VueRouter from 'vue-router'
import RMainPage from "../views/RMainPage.vue";
import RBlog from "../views/RBlog.vue";
import RBLOGTop from "../views/RBLOGTop.vue";
import RProject from "../views/RProject.vue";
import RProjectDetails from "../views/RProjectDetails.vue";
import NotFound from "../views/NotFound.vue";
// import TheNumerator from "./components/Numerator.vue";
// import LatestPost from "./components/LatestPost.vue";
// import BlogTop from "./components/BlogTop.vue";
// import ArticlesNews from "./components/ArticlesNews.vue";
// import BlogDetails from "./components/BlogDetails.vue";
// import MainPage from "./components/MainPage.vue";
// import ProjectSelector from "./components/ProjectSelector.vue";
// import ProjectDetails from "./components/ProjectDetails.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RMainPage',
    component: RMainPage
  },
  // {
  //   path: '/RBlog',
  //   name: 'abRBlogout',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/RBlog',
    name: 'RBlog',
    component: RBlog
  },
  {
    path: '/RBLOGTop',
    name: 'RBLOGTop',
    component: RBLOGTop
  },
  {
    path: '/RProject',
    name: 'RProject',
    component: RProject
  },
  {
    path: '/RProjectDetails',
    name: 'RProjectDetails',
    component: RProjectDetails
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
