import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/HomePage.vue"
import AboutPage from "@/views/AboutPage.vue"
import ModelguidePage from "@/views/ModelguidePage.vue"
import ContactPage from "@/views/ContactPage.vue"
import ModelversePage from "@/views/ModelversePage.vue"
import ExampleModel1Guide from "@/components/modelguide-page/models/ExampleModel1Guide.vue"

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
        path : "/modelverse",
        component : ModelversePage,
    },
    {
        path : "/contact",
        component : ContactPage,
    },
    {
        path : "/modelguide",
        component : ModelguidePage,
    },
    {
        path : "/modelguide/examplemodel1guide",
        component : ExampleModel1Guide,
    },
    
]

const router = createRouter({
    routes : routes,
    history : createWebHistory(),

})

export default router