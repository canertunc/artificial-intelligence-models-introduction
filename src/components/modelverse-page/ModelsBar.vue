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
        <div class="choices-bar">
            <div class="model-button">
                <button @click="doActiveModel(1)" class="model-name-button"
                    :class="{ focusButton: $store.state.models.isActiveMlExample.isActive }">Machine Learning</button>
            </div>
            <div class="model-button">
                <button @click="doActiveModel(2)" class="model-name-button"
                    :class="{ focusButton: $store.state.models.isActiveMlExample2.isActive }">Machine Learning</button>
            </div>
            <div class="model-button">
                <button class="model-name-button">Machine Learning</button>
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
    <ExampleModel v-if="$store.state.models.isActiveMlExample.isActive" />
    <ExampleModel2 v-else-if="$store.state.models.isActiveMlExample2.isActive" />
</template>

<script>
import ExampleModel from "@/components/modelverse-page/models/ExampleModel.vue"
import ExampleModel2 from "@/components/modelverse-page/models/ExampleModel2.vue"

export default {
    beforeUnmount(){
        this.doActiveModel(0)
        this.$store.state.mainButton = true
    },
    components: {
        ExampleModel: ExampleModel,
        ExampleModel2: ExampleModel2,
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
    background-color: black;
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
</style>