import User from "@/modules/User";

const mutations = {
  login(state: any) {
    state.user = User.from(localStorage.token);
  },
  logout(state: any) {
    localStorage.removeItem("token");
    state.user = null;
  }
};

const getters = {
  currentUser(state: any) {
    return state.user;
  },
  isAdmin: (state: any) => (state.user ? state.user.isAdmin : false),
};

const actions = {
  login({ commit }: any) {
    commit("login");
  },
  logout({ commit }: any) {
    commit("logout");
  }
};

const state = {
  user: User.from(localStorage.token),
};

export default {
  state,
  mutations,
  getters,
  actions
};
