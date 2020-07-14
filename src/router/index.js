import Vue from "vue";
import VueRouter from "vue-router";
import Unit from "@/components/unit";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: "/",
        name: "Home",
        component: Unit,
    }, ],
});