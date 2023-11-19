import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import store from './store'

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App,
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
