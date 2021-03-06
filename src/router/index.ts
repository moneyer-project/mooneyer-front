import {createWebHistory, createRouter} from "vue-router"

import Home from "../views/Home.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: () => import('../views/About.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
