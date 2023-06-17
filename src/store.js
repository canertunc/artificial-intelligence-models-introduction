import {createStore} from "vuex"

const store = createStore({
    state : {
        models: {
            isActiveMlExample: {
                isActive: false,
                ml : true,
                id: 1
            },
            isActiveMlExample2: {
                isActive: false,
                ml : true,
                id: 2
            },
        },
        machineLearningButton : false,
        deepLearningButton : false,
        mainButton : true,

    }
})
export default store