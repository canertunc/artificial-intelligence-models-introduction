import {createStore} from "vuex"

const store = createStore({
    state : {
        models: {
            bankFraudDetecting: {
                isActive: false,
                ml : true,
                id: 1
            },
            druggerDetecting: {
                isActive: false,
                ml : true,
                id: 2
            },
            spaceshipPassenger: {
                isActive: false,
                ml : true,
                id: 3
            },
            hondaCarValidation: {
                isActive: false,
                ml : true,
                id: 4
            },
        },
        machineLearningButton : false,
        deepLearningButton : false,
        mainButton : true,

    }
})
export default store