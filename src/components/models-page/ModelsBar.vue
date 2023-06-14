<template>
    <div v-if="isActiveMain" class="main-bar">
        <div class="bar-header">
            <h3>Models</h3>
        </div>
        <div class="choices-bar">
            <div class="ml">
                <button @click = "doActiveMl" class="model-name-button">Machine Learning</button>
            </div>
            <div class="dl">
                <button @click = "doActiveDl" class="model-name-button">Deep Learning</button>
            </div>
        </div>
    </div>
    <div v-else-if="isActiveMl" class="main-bar" >
        <div class="bar-header" >
            <h3>Machine Learning</h3>
        </div>
        <div class="choices-bar">
            <div class="model-button">
                <button @click="isActiveMlExample = true,isActiveMlExample2 = false" class="model-name-button" :class="{focusButton : isActiveMlExample}">Machine Learning</button>
            </div>
            <div class="model-button">
                <button @click="isActiveMlExample2 = true,isActiveMlExample = false" class="model-name-button" :class="{focusButton : isActiveMlExample2}" >Machine Learning</button>
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
    <ExampleModel v-if="isActiveMlExample"/>
    <ExampleModel2 v-else-if="isActiveMlExample2" />





</template>

<script>
    import ExampleModel from "@/components/models-page/models/ExampleModel.vue"
    import ExampleModel2 from "@/components/models-page/models/ExampleModel2.vue"

    export default {
        components : {
            ExampleModel : ExampleModel,
            ExampleModel2 : ExampleModel2,
        },
        data() {
            return {
                isActiveMain : true,
                isActiveMl : false,
                isActiveDl : false,
                isActiveMlExample : false,
                isActiveMlExample2 : false, /* Bu değiştirilmeli bu yöntem çok kod ister! */
            };
        },
        methods:{
            doActiveMl(){
                this.isActiveMain = false;
                this.isActiveDl = false;
                this.isActiveMl = true;
            },
            doActiveDl(){
                this.isActiveMain = false;
                this.isActiveDl = true;
                this.isActiveMl = false;
            },
            doActiveMain(){
                this.isActiveMain = true;
                this.isActiveDl = false;
                this.isActiveMl = false;
                this.isActiveMlExample = false;
                this.isActiveMlExample2 = false;
            },
        },
    }

</script>

<style>
.main-bar {
    background-color: black;
    opacity: 0.7;
    height: 691px; /* 693px */
    width: 300px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border: 1px rgb(20, 20, 20) solid;
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
    transition:0.5s;
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