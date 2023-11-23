import Vue from 'vue';
import Router from 'vue-router';
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Pricing from "../views/Pricing.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";

Vue.use(Router)

function isAuthenticated(to, from, next) {
  console.log(to);
  if (!localStorage.getItem("user")) {
    next({
      path: '/login'
    });
  }
  next();
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      beforeEnter: isAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
