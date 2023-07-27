<template>
    <div v-if="$store.state.mainButton" class="main-bar">
        <div class="bar-header">
            <h3>Models</h3>
        </div>
        <div class="choices-bar">
            <div class="ml">
                <button @click="doActiveMl" class="model-name-button">Machine Learning</button>
            </div>
            <div class="dl">
                <button @click="doActiveDl" class="model-name-button">Deep Learning</button>
            </div>
        </div>
    </div>
    <div v-else-if="$store.state.machineLearningButton" class="main-bar">
        <div class="bar-header">
            <h3>Machine Learning</h3>
        </div>
        <div class="choices-bar choices-models">
            <div class="model-button">
                <button @click="doActiveModel(1)" class="model-name-button"
                    :class="{ focusButton: $store.state.models.bankFraudDetecting.isActive }">Bank Fraud Detecting</button>
            </div>
            <div class="model-button">
                <button @click="doActiveModel(2)" class="model-name-button"
                    :class="{ focusButton: $store.state.models.druggerDetecting.isActive }">Drugger Detecting</button>
            </div>
            <div class="model-button">
                <button @click="doActiveModel(3)" class="model-name-button"
                :class="{ focusButton: $store.state.models.spaceshipPassenger.isActive }">Spaceship Passenger</button>
            </div>
            <div class="model-button">
                <button @click="doActiveModel(4)" class="model-name-button"
                :class="{ focusButton: $store.state.models.hondaCarValidation.isActive }">Honda Car Validation</button>
            </div>
        </div>

        <div class="back">
            <button @click="doActiveMain">back</button>
        </div>
    </div>
    <div v-else class="main-bar">
        <div class="bar-header">
            <h3>Deep Learning</h3>
        </div>
        <div class="choices-bar">
            <div class="model-button">
                <button class="model-name-button">Deep Learning</button>
            </div>
            <div class="model-button">
                <button class="model-name-button">Deep Learning</button>
            </div>
            <div class="model-button">
                <button class="model-name-button">Deep Learning</button>
            </div>
        </div>
        <div class="back">
            <button @click="doActiveMain">back</button>
        </div>

    </div>
    <bankFraudDetecting v-if="$store.state.models.bankFraudDetecting.isActive" />
    <druggerDetecting v-else-if="$store.state.models.druggerDetecting.isActive" />
    <spaceshipPassenger v-else-if="$store.state.models.spaceshipPassenger.isActive" />
    <hondaCarValidationModel v-else-if="$store.state.models.hondaCarValidation.isActive" />

</template>

<script>
import bankFraudDetecting from "@/components/modelverse-page/models/ExampleModel.vue"
import druggerDetecting from "@/components/modelverse-page/models/ExampleModel2.vue"
import spaceshipPassenger from "@/components/modelverse-page/models/ExampleModel3.vue"
import hondaCarValidationModel from "@/components/modelverse-page/models/HondaCarValidationModel.vue"

export default {
    beforeUnmount(){
        this.doActiveModel(0)
        this.$store.state.mainButton = true
    },
    components: {
        bankFraudDetecting: bankFraudDetecting,
        druggerDetecting: druggerDetecting,
        spaceshipPassenger : spaceshipPassenger,
        hondaCarValidationModel : hondaCarValidationModel,
    },
    methods: {
        doActiveMl() {
            this.$store.state.mainButton = false;
            this.$store.state.machineLearningButton = true,
            this.$store.state.deepLearningButton = false
        },
        doActiveDl() {
            this.$store.state.mainButton = false;
            this.$store.state.machineLearningButton = false,
            this.$store.state.deepLearningButton = true
        },
        doActiveMain() {
            this.$store.state.mainButton = true;
            this.$store.state.machineLearningButton = false,
            this.$store.state.deepLearningButton = false
            this.doActiveModel(0);
        },
        doActiveModel(modelId) {

            for (let key in this.$store.state.models) {
                if(this.$store.state.models[key].id == modelId) {
                    this.$store.state.models[key].isActive = true;
                    }
                    else {
                        this.$store.state.models[key].isActive = false;
                    }
            }

        },
    },
}

</script>

<style>
.main-bar {
    background-color: rgb(8, 8, 23);
    opacity: 0.7;
    height: 691px;
    /* 693px */
    width: 300px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border: 1px rgb(20, 20, 20) solid;
    margin-top: 140px;
}

.main-bar h3 {
    text-align: center;
    margin-top: 100px;
}

.ml {
    text-align: center;
}

.dl {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 100px;
}

.model-button {
    text-align: center;
    margin-top: 20px;
}

.model-name-button {
    width: 220px;
    height: 30px;
    border: 0;
    text-decoration: none;
    border-radius: 4px;
    background-color: black;
    color: aliceblue;
    cursor: pointer;
    transition: 0.5s;
    opacity: 0.5;

}

.model-name-button:hover {
    border: 1px aliceblue solid;
    opacity: 1;
}

.back {
    text-align: center;
}

.back button {
    width: 125px;
    height: 30px;
    border: 0;
    text-decoration: none;
    border: 0;
    background-color: black;
    border-radius: 4px;
    color: aliceblue;
    cursor: pointer;
    transition: 0.5s;
    opacity: 0.5;
}

.back button:hover {
    border: 1px aliceblue solid;
    opacity: 1;
}

.focusButton {
    border: 1px aliceblue solid;
    opacity: 1;
}


.choices-models {
    overflow: auto;
    height: 200px;
    margin-left: 20px
  }
   .model-1 {
    margin-right: 20px;
   }

.choices-models::-webkit-scrollbar {
  width: 5px; 
}

.choices-models::-webkit-scrollbar-thumb {
  background-color: #ffff; 
  border-radius: 5px;
}

.choices-models::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}


.choices-models::-webkit-scrollbar-track {
  background-color: black; 
}

.choices-models::-webkit-scrollbar-track-piece {
  background-color: black; 
}

.choices-models::-webkit-scrollbar-button {
  background-color: black; 
}
  
  
  
  @keyframes fadeIn {
    0% {
      opacity: 0; 
      transform: translateY(20px); 
    }
    100% {
      opacity: 1; 
      transform: translateY(0); 
    }
  }
</style>