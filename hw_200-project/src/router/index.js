import Vue from 'vue'
import VueRouter from 'vue-router'
import RMainPage from "../views/RMainPage.vue";
import RBlog from "../views/RBlog.vue";
import RBLOGTop from "../views/RBLOGTop.vue";
import RProject from "../views/RProject.vue";
import RProjectDetails from "../views/RProjectDetails.vue";
import NotFound from "../views/NotFound.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RMainPage',
    component: RMainPage
  },
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
