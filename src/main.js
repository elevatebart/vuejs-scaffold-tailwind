import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/configs/middleware";

import "./main.postcss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
