import profiles from "@/api/profiles";

export const state = {
  collabs: []
};

export const mutations = {
  _set(state, collabs) {
    state.collabs = collabs;
  }
};

export const getters = {};

export const actions = {
  async _get({ commit }) {
    try {
      const collabs = await profiles.get();
      commit("_set", collabs);
    } catch (e) {
      console.log(e);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
