import store from "../store";

store.getters.configure({
    getters: {
        createAccForm(state) {
            return state.createAccForm;
        },
    },
});