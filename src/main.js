import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
// import VueRoute from "./router/index";
import HomePage from "./components/homePage";
import Login from "./components/login";

// Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: "/home", component: HomePage },
    { path: "/login", component: Login },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

new Vue({
    vuetify,
    VueRouter,
    router,
    render: (h) => h(App),
}).$mount("#app");