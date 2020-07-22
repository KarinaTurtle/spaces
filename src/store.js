// import vue from "vue";
import vuex from "vuex";
import axios from "axios";
import Vue from "vue";

Vue.use(vuex, axios);

export default new vuex.Store({
    // strict: true,
    state: {
        createAccForm: [{
            fName: "",
            lName: "",
            email: "",
            createPassword: "",
            confirmPassword: "",
        }, ],
    },
    methods: {},
    // actions: {
    //     sendData(context) {
    //         context.commit("createAcc");
    //     },
    // },
    // mutations: {
    //     createAcc(state) {
    //         state.createAcc();
    //     },
    // },
});