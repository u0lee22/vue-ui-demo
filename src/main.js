import Vue from "vue";
import App from "./App";

import store from "./store";
import VueRouter from "vue-router";
import routes from "./routes/router";

import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

import MaterialDashboard from "./material-dashboard";

const router = new VueRouter({
    routes, // short for routes: routes
    linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App),
    router,
    store,
    data: {}
});
