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
                    <h4>Bank Cheater Detecting</h4>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium corporis harum perspiciatis,
                        quod delectus, facilis autem tenetur in iure, vero iste voluptas eligendi? Voluptatibus nam alias
                        quibusdam, odit quia consequuntur. Nesciunt hic non voluptatibus? Blanditiis nam repudiandae vero
                        mollitia numquam consequuntur, facilis nostrum exercitationem modi architecto dicta optio minus
                        aperiam corrupti quibusdam. Necessitatibus, numquam ...</p>
                    <h4>Bank Cheater Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelguide/examplemodel1guide" class="router-link-below">
                <div class="model2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium corporis harum perspiciatis,
                        quod delectus, facilis autem tenetur in iure, vero iste voluptas eligendi? Voluptatibus nam alias
                        quibusdam, odit quia consequuntur. Nesciunt hic non voluptatibus? Blanditiis nam repudiandae vero
                        mollitia numquam consequuntur, facilis nostrum exercitationem modi architecto dicta optio minus
                        aperiam corrupti quibusdam. Necessitatibus, numquam ...</p>
                    <h4>Bank Cheater Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelguide/examplemodel1guide" class="router-link-below">
                <div class="model3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium corporis harum perspiciatis,
                        quod delectus, facilis autem tenetur in iure, vero iste voluptas eligendi? Voluptatibus nam alias
                        quibusdam, odit quia consequuntur. Nesciunt hic non voluptatibus? Blanditiis nam repudiandae vero
                        mollitia numquam consequuntur, facilis nostrum exercitationem modi architecto dicta optio minus
                        aperiam corrupti quibusdam. Necessitatibus, numquam ...</p>
                    <h4>Bank Cheater Detecting</h4>
                </div>
            </router-link>
            <router-link to="/modelguide/examplemodel1guide" class="router-link-below">
                <div class="model4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusantium corporis harum perspiciatis,
                        quod delectus, facilis autem tenetur in iure, vero iste voluptas eligendi? Voluptatibus nam alias
                        quibusdam, odit quia consequuntur. Nesciunt hic non voluptatibus? Blanditiis nam repudiandae vero
                        mollitia numquam consequuntur, facilis nostrum exercitationem modi architecto dicta optio minus
                        aperiam corrupti quibusdam. Necessitatibus, numquam ...</p>
                    <h4>Bank Cheater Detecting</h4>
                </div>
            </router-link>
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
