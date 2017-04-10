// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUi from 'element-ui'
import VueLazyLoad from 'vue-lazyload/vue-lazyload'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(VueAxios,Axios)
Vue.use(ElementUi)
Vue.use(VueLazyLoad,{
  loading: './static/load.jpg',
  attempt: 1,
  listenEvent: ['mousewheel']
});

/* eslint-disable no-new */
new Vue({
  mode: 'history',
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.axios.get('/mock/data.json').then((response) => {
  console.log(response);
})
