import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Shopping from "../views/Shopping.vue";
import Mine from "../views/Mine.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About"
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: Shopping,
    meta: {
      title: "Shopping"
    }
  },
  {
    path: "/mine",
    name: "Mine",
    component: Mine,
    meta: {
      title: "Mine"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
