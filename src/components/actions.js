import store from "../store";

store.actions.configure({
    actions: {
        createAcc2() {
            this.$store.commit("createAcc");
        },
    },
});