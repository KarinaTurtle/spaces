// import vue from "vue";
import vuex from "vuex";
import axios from "axios";
import Vue from "vue";

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        createAccForm: {
            fName: "",
            lName: "",
            email: "",
            createPassword: "",
            confirmPassword: "",
        },
        title: "title",
        fname: [],
    },
    getters: {
        fname: (state) => {
            return state.fname;
        },
    },
    mutations: {
        ADD_USER: (state, user) => {
            state.fname.push(user);
        },
    },
});