import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Navbar from "@/views/NavBar.vue";
import router from "@/configs/router";

import auth from "@/middleware/auth";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      ...router.home,
      meta: {
        middleware: [auth]
      },
      components: {
        nav: Navbar,
        default: Home
      }
    }
  ]
});
