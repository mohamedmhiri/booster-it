import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About';
import Home from '@/views/Home';
import NotFound from '@/views/NotFound';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "Welcome to Our Website"
      }
    },
    {
      path: '/ab0ut',
      name: 'About',
      component: About,
      meta: {
        title: "About Us"
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: "Error 404 - Page Not Found"
      }
    }
  ]
})
