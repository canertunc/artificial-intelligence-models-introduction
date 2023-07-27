<template>
    <div class="example-model-1">

        <div class="example-model-1-head">
            <h2>DRUGGER DETECTING</h2>
            <p>If you want to know if you are a drug addict</p>
            <router-link to="/modelverse"><button class="try-button" @click="doActiveModel(2)">Try</button></router-link>
        </div>

        <div class="example-model-1-image">
            <div>
                <img src="@/assets/drugger.jpg" alt="">
            </div>
        </div>
        <div class="example-model-1-body">
            <div>
                <p>
                    Predicts whether the human face given to the model is a drug addict. This model was coded with the
                    convutaional neural network method, which is one of the deep learning techniques. The model has been
                    filtered 3 times and the data in the model has been replicated using data duplication technique. You can
                    call this replication technique by the name 'Data Augmentation'. The accuracy rate of the model is 92
                    percent, this rate is quite high, but as more improvements are made to the model, this rate will
                    decrease gradually, but it will become a better model. Improvements of the model are still in progress.
                    If you want to get more detailed information about the model, you can contact us from the contact
                    section.</p>
            </div>
            <div class="table-model-1">
                <table id="inputs-1">
                    <tr>
                        <td>Face Image:</td>
                        <td>This model only takes the photo input of your face. The photo you will upload should only cover your face. The photos uploaded from the neck part will give better results.</td>
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
    components: {
        appFooter: appFooter,
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