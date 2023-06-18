<template>
    <div class="example-model-1">

        <div class="example-model-1-head">
            <h2>BANK FRAUD DETECTING</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quibusdam.</p>
            <router-link to="/modelverse"><button class="try-button" @click="doActiveModel(1)">Try</button></router-link>
        </div>

        <div class="example-model-1-image">
            <div>
                <img src="@/assets/rocket.jpg" alt="">
            </div>
        </div>
        <div class="example-model-1-body">
            <div>
                <p>
                    Bank fraud detection model is a type of model that is frequently used in banks. This model gives an
                    output according to whether the bank is likely to be defrauded according to the information of the
                    customers. This model is coded with support vector machines, which is one of the machine learning
                    algorithms. The data telling percentage of the inputs is 97 percent, which is quite good. In addition,
                    the accuracy rate of the model is 85.54%. The most important input of the model is the isCreditCar
                    input, which can be thought to be due to the trust of customers with credit cards in the bank, in this
                    case the customer is less likely to defraud the bank. Another important input is the isActiveMember
                    input, which shows us the activeness of the customer (for the last 1 year). Non-users are more likely to
                    be scammed. Below are the inputs in the model and their descriptions. If you want to get more detailed
                    information about the model, you can contact us from the contact section..</p>
            </div>
            <div class="table-model-1">
                <table id="inputs-1">
                    <tr>
                        <td>Credit Score:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                    <tr>
                        <td>Geography:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                    <tr>
                        <td>Time Spent in the Bank:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                    <tr>
                        <td>Number of Products:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                    <tr>
                        <td>Credit Car:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                    <tr>
                        <td>Active:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                    <tr>
                        <td>Estimated Salary:</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, similique.</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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