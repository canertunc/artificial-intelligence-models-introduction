<template>
    <div class="home-first">
        <div class="home">
            <div class="home-head">
                SO, YOU WANT TO TRAVEL TO
            </div>
            <div class="main-head">
                ARTIFICIAL INTELLIGENCE
            </div>
            <div class="home-explanation">
                Let's face it, if you want to try models that use machine learning and deep learning algorithms,
                this website is for you. You will also have the chance to examine these models in detail.
            </div>
        </div>
    </div>
    <div class="home-modelverse">
        <div class="home-modelverse-head">
            <div>
                <hr>
                <h2>ModelVerse</h2>
            </div>
            <div>
                <hr>
                <p>You can use models!</p>
            </div>
        </div>
        <div class="home-modelverse-body">
            <router-link to="/modelverse" class="router-link-below" @click = "doActiveModel(1)">
                <div class="model1"><img src="@/assets/rocket.jpg" alt="">
                    <h4>Bank Fraud Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelverse" class="router-link-below" @click = "doActiveModel(2)">
                <div class="model2"><img src="@/assets/spaceship.jpg" alt="">
                    <h4>Bank Cheater Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelverse" class="router-link-below" @click = "doActiveModel(1)">
                <div class="model3"><img src="@/assets/rocket.jpg" alt="">
                    <h4>Bank Cheater Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelverse" class="router-link-below" @click = "doActiveModel(2)">
                <div class="model4"><img src="@/assets/spaceship.jpg" alt="">
                    <h4>Bank Cheater Detecting</h4>
                </div>
            </router-link>
        </div>
    </div>

    <div class="home-modelguide">

        <div class="home-modelguide-head">
            <div>
                <hr>
                <h2>Model Guide</h2>
            </div>
            <div>
                <hr>
                <p>You can read details about models!</p>
            </div>
        </div>
        <div class="home-modelguide-body">
            <router-link to="/modelguide/examplemodel1guide" class="router-link-below">
                <div class="model1">
                    <p>Bank fraud detection model is a type of model that is frequently used in banks. This model gives an
                    output according to whether the bank is likely to be defrauded according to the information of the
                    customers. This model is coded with support vector machines, which is one of the machine learning
                    algorithms ...</p>
                    <h4>Bank Fraud Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelguide/examplemodel1guide" class="router-link-below">
                <div class="model2">
                    <p>Bank fraud detection model is a type of model that is frequently used in banks. This model gives an
                    output according to whether the bank is likely to be defrauded according to the information of the
                    customers. This model is coded with support vector machines, which is one of the machine learning
                    algorithms ...</p>
                    <h4>Bank Fraud Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelguide/examplemodel1guide" class="router-link-below">
                <div class="model3">
                    <p>Bank fraud detection model is a type of model that is frequently used in banks. This model gives an
                    output according to whether the bank is likely to be defrauded according to the information of the
                    customers. This model is coded with support vector machines, which is one of the machine learning
                    algorithms ...</p>
                    <h4>Bank Fraud Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelguide/examplemodel1guide" class="router-link-below">
                <div class="model4">
                    <p>Bank fraud detection model is a type of model that is frequently used in banks. This model gives an
                    output according to whether the bank is likely to be defrauded according to the information of the
                    customers. This model is coded with support vector machines, which is one of the machine learning
                    algorithms ...</p>
                    <h4>Bank Fraud Detecting</h4>
                </div>
            </router-link>
        </div>
    </div>

    <footer>
        <hr>
        <div class="contact-github-linkedln">
            <div class="contact-images">
                <a :href="twitterURL" target = "blank"><img src="@/assets/twitter-icon.png" alt="twitter-icon"></a>
                <a :href="githubURL" target = "blank"><img src="@/assets/github-icon.png" alt="github-icon"></a>
                <a :href="linkedlnURL" target = "blank"><img src="@/assets/linkedln-icon.png" alt="linkedln-icon"></a>
            </div>
        </div>
        <div class="footer-name">
            DopingAI © 2022-2023
        </div>
    </footer>

</template>
<script>
export default {
    data() {
        return {
            githubURL : "https://github.com/canertunc",
            linkedlnURL : "https://www.linkedin.com/in/caner-tun%C3%A7-7592291b8/",
            twitterURL : "https://twitter.com/"
        }
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
.footer-name {
    margin-bottom: 20px;
}
.contact-github-linkedln {
    margin-top: 150px;
}
footer {
    text-align: center;
    margin-top: 50px;

}
.router-link-below {
    text-decoration: none;
    border: 0;
    color: aliceblue;
}

.home-first {
    background-image: url("@/assets/background.png");
    background-size: 100%;
    width: 1627px;
    height: 838px;
}




.home-modelverse {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    background-color: black;
    height: 670px;
}

.home-modelverse-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 800px;
}

.home-modelverse-head,
.home-modelguide-head h2 {
    font-size: 40px;
}

.home-modelverse-head,
.home-modelguide-head p {
    font-size: 30px;
}

.home-modelverse-body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 35px;
}


.home-modelverse-body img {
    width: 330px;
    height: 330px;
}

.home-modelguide {
    display: flex;
    flex-direction: column;
    background-color: black;
    height: 670px;
}

.home-modelguide-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 535px;
}

.home-modelguide-body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 35px;
}

.home-modelguide-body img {
    width: 330px;
    height: 330px;
}

.home-modelguide-body div {
    width: 330px;
    height: auto;
    border: 1px solid aliceblue;
    padding-left: 15px;
    padding-top: 5px;
}




.home {
    animation: slideInLeft 1.5s ease-in-out;

}

@keyframes slideInLeft {
    0% {
        opacity: 0;
        transform: translateX(-20px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}</style>
