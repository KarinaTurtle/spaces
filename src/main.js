import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
// import VueRoute from "./router/index";
import HomePage from "./components/homePage";
import Login from "./components/login";
import PayRent from "./components/payRent";
import Maintenance from "./components/maintenance";
import ExtendStay from "./components/extendStay";
import ThirtyDayNotice from "./components/30daynotice";
import CreateAccount from "./components/createAccount";
import AccountFor from "./components/acc-for";

// vue state management
import store from "./store";

// Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: "/home", component: HomePage },
    { path: "/login", component: Login },
    { path: "/payrent", component: PayRent },
    { path: "/maintenance", component: Maintenance },
    { path: "/extendstay", component: ExtendStay },
    { path: "/30daynotice", component: ThirtyDayNotice },
    { path: "/create-acc", component: CreateAccount },
    { path: "/acc-for", component: AccountFor },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

new Vue({
    vuetify,
    VueRouter,
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");