import Vue from "vue";
import VueRouter from "vue-router"
import Home from "../views/Home";
import Fetch from "../views/Fetch";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/fetch',
            component: Fetch
        }
    ]
});