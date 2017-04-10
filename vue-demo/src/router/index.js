import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import ImgLazy from '@/components/ImgLazy'
import List from '@/views/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/imgLazy',
      name: 'ImgLazy',
      component: ImgLazy
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
