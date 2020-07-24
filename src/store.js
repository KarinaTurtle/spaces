// import vue from "vue";
import vuex from "vuex";
import axios from "axios";
import Vue from "vue";

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        users: [],
    },
    getters: {},
    mutations: {
        ADD_USER: (state, payload) => {
            state.users.push(payload.user);
        },
    },
    actions: {
        addUser: ({ commit }, payload) => {
            commit("ADD_USER", payload);
        },
    },
});