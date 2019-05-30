import Vue from "vue";
import Vuex from "vuex";

import profiles from "@/store/profiles";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    profiles: profiles
  }
});
