import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login.vue'
import Home from '../page/home.vue'
import Resume from '../components/resume.vue'
import Basetable from '../page/basetable.vue'
import Charts from '../components/charts.vue'
import Register from '../page/register.vue'
import MainActive from '../page/mainActive.vue'
import Markdown from '../page/markdown.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/home/',
          redirect: '/home/resume',
          component: Resume,
          children: [{
            path: '/home/resume/',
          }]
        },
        {
          path: '/home/basetable',
          component: Basetable
        },
        {
          path: '/home/charts',
          component: Charts
        },
        {
          path: '/home/register',
          component: Register
        },
        {
          path: '/home/mainActive',
          component: MainActive
        },
        {
          path: '/home/markdown',
          component: Markdown
        }
      ]
    }
  ]
})
