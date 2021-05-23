import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import UserControl from '../views/UserControl.vue';
// import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/users/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/users/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/users/usercontrol',
    name: 'UserControl',
    component: UserControl,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
