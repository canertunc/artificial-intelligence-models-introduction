<template>
    <div class="example-model-1">

        <div class="example-model-1-head">
            <h2>SPACESHIP PASSENGER</h2>
            <p>If you want to know if you will be accepted into space travel</p>
            <router-link to="/modelverse"><button class="try-button" @click="doActiveModel(3)">Try</button></router-link>
        </div>

        <div class="example-model-1-image">
            <div>
                <img src="@/assets/rocket.jpg" alt="">
            </div>
        </div>
        <div class="example-model-1-body">
            <div>
                <p>
                    The spaceship passenger model is a model that predicts whether the person to whom the information
                    belongs will be accepted for the spaceship journey, according to the information entered. This model is
                    coded with artificial neural networks, which is one of the deep learning methods. The percentage of the
                    inputs telling the model is 94, which is sufficient. However, the accuracy of the model is 81.7 percent.
                    The most important input of the model is the age input, which is important because this journey appeals
                    more to a certain age range. This model is considered to be similar to the titanic model and there was a
                    kaggle competition, so the dataset was taken from the kaggle platform. Below are the inputs in the model
                    and their descriptions. If you want to get more detailed information about the model, you can contact us
                    from the contact section.</p>
            </div>
            <div class="table-model-1">
                <table id="inputs-1">
                    <tr>
                        <td>Home Planet:</td>
                        <td>It contains information about your home planet. (Europe, Earth, Mars)</td>
                    </tr>
                    <tr>
                        <td>Cryo Sleep:</td>
                        <td>Receives information about whether you have cryo-sleep..</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>It represents the age. The age range should be 0-125.</td>
                    </tr>
                    <tr>
                        <td>VIP:</td>
                        <td>Defines whether you are a VIP passenger or not.</td>
                    </tr>
                    <tr>
                        <td>Room Service:</td>
                        <td>Gets information about the amount of room service you want.</td>
                    </tr>
                    <tr>
                        <td>Food Court:</td>
                        <td>Gets information about the amount of foot court you want.</td>
                    </tr>
                    <tr>
                        <td>Shopping Mall:</td>
                        <td>It represents the amount you will spare for shopping.</td>
                    </tr>
                    <tr>
                        <td>Spa:</td>
                        <td>It represents the fee you will allocate to the spa.</td>
                    </tr>
                    <tr>
                        <td>VRDeck:</td>
                        <td>It represents how much virtual reality service you want to receive during your journey, according to its duration.</td>
                    </tr>
                    <tr>
                        <td>Cabin:</td>
                        <td>Indicates which cabin you want to make your journey in. It is in an alphabetical order from front to back.</td>
                    </tr>
                    <tr>
                        <td>Destination:</td>
                        <td>Represents your destination</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <appFooter />
</template>

<script>
import appFooter from "@/components/appFooter.vue"
export default {
    components : {
        appFooter : appFooter,
    },
    methods: {
        doActiveModel(modelId) {

            for (let key in this.$store.state.models) {
                if (this.$store.state.models[key].id == modelId) {
                    this.$store.state.models[key].isActive = true;
                    if (this.$store.state.models[key].ml === true) {
                        this.$store.state.machineLearningButton = true;
                    }
                    else {
                        this.$store.state.deepLearningButton = true
                    }
                    this.$store.state.mainButton = false
                }
                else {
                    this.$store.state.models[key].isActive = false;
                }
            }

        },
    }
}

</script>


<style>
.example-model-1 {
    width: 1627px;
    height: auto;
    background-color: black;
    background-image: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.example-model-1-head {
    margin-top: 400px;
}

.example-model-1-head h2 {
    font-size: 50px
}

.example-model-1-head p {
    font-size: 20px;
}

.example-model-1-image {
    margin-top: 300px;
}
.example-model-1-image img {
    width: 700px;
    height: 500px;
}

.example-model-1-body {
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    width: 700px;
    padding: 30px 30px;
}

#inputs-1 {
    width: 100%;
    font: bold 1.25em "Trebuchet MS", Verdana, Arial, Helvetica,
        sans-serif;
    border: 12px solid #505050;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: left;
    padding: 6px 6px 6px 12px;
    background: #C1DAD7;
    border-collapse: collapse;
    font-size: 13px;
    margin-top: 50px;
}

#inputs-1 th {
    color: #41AA7F;
    padding: 6px 6px 6px 12px;

}

#inputs-1 tr {
    color: #112233;
    background: #fff;
    cursor: pointer;
    border-bottom: 3px solid #505050;
}

#inputs-1 tr:hover {
    background: #202020;
    color: #fff;
}

.try-button {
    width: 150px;
    height: 30px;
    cursor: pointer;
    background-color: black;
    border: 1px solid aliceblue;
    color: aliceblue;
    font-size: 15px;
}

.try-button:hover {
    background-color: aliceblue;
    color: black;
}</style>