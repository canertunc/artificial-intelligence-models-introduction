import {createRouter, createWebHistory} from "vue-router"
;
import HomePage from "@/views/HomePage.vue"

import AboutPage from "@/views/AboutPage.vue"

import ModelguidePage from "@/views/ModelguidePage.vue"

import ContactPage from "@/views/ContactPage.vue"

import ModelversePage from "@/views/ModelversePage.vue"
import BankFraudDetectingGuide from "@/components/modelguide-page/models/BankFraudDetectingGuide.vue"
import SpaceshipPassengerGuide from "@/components/modelguide-page/models/SpaceshipPassengerGuide.vue"
import DruggerDetectingGuide from "@/components/modelguide-page/models/DruggerDetectingGuide.vue"
import HondaCarValidationGuide from "@/components/modelguide-page/models/HondaCarValidationGuide.vue"

import AlgorithmsPage from "@/views/AlgorithmsPage.vue"
import SupportVectorMachines from "@/components/algorithms-page/algorithms/SupportVectorMachines.vue"
import RandomForests from "@/components/algorithms-page/algorithms/RandomForest.vue"
import ArtificialNeuralNetworks from "@/components/algorithms-page/algorithms/ArtificialNeuralNetworks.vue"
import ConvolutionalNeuralNetworks from "@/components/algorithms-page/algorithms/ConvolutionalNeuralNetworks.vue"

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
        path : "/modelguide/bankfrauddetectingguide",
        component : BankFraudDetectingGuide,
    },
    {
        path : "/modelguide/spaceshippassengerguide",
        component : SpaceshipPassengerGuide,
    },
    {
        path : "/modelguide/druggerdetectingguide",
        component : DruggerDetectingGuide,
    },
    {
        path : "/modelguide/hondacarvalidationguide",
        component : HondaCarValidationGuide,
    },                                
    {
        path : "/algorithmspage",
        component : AlgorithmsPage,
    },    {
        path : "/algorithmspage/suportvectormachines",
        component : SupportVectorMachines,
    },
    {
        path : "/algorithmspage/randomforests",
        component : RandomForests,
    },
    {
        path : "/algorithmspage/artificialneuralnetworks",
        component : ArtificialNeuralNetworks,
    },
    {
        path : "/algorithmspage/convolutionalneuralnetworks",
        component : ConvolutionalNeuralNetworks,
    },
    
]

const router = createRouter({
    routes : routes,
    history : createWebHistory(),

})

export default router