import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue"
import AboutPage from "@/views/AboutPage.vue"
import ModelsPage from "@/views/ModelsPage.vue"

const routes = [

    {
        path : "/",
        component : HomePage,

    },
    {
        path : "/about",
        component : AboutPage,
    },
    {
        path : "/models",
        component : ModelsPage,
    },
]

const router = createRouter({
    routes : routes,
    history : createWebHistory(),

})

export default router