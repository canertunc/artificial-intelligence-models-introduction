<template>
    <div class="model-body" v-if="!isHidden">
        

        <div class="flex-row">
            <div class="credit-score flex-inf">
                <div class="label-inf">
                    <label for="">Year</label>
                </div>
                <div class="input-inf">
                    <input type="number" min="1950" max="2023">
                </div>
            </div>

            <div class="geography flex-inf">
                <div class="label-inf">
                    <label for="">Kms Driven</label>
                </div>
                <div class="input-inf">
                    <input type="number" min="0" max="1000000">

                </div>
            </div>

        </div>

        <div class="flex-row">

            <div class="gender flex-inf">
                <div class="label-inf">
                    <label for="">Suspension Type</label>
                </div>
                <div class="input-inf">
                    <select name="" id="">
                        <option value="">Manuel</option>
                        <option value="">Automatic</option>
                    </select>
                </div>
            </div>
            <div class="credit-score flex-inf">
                <div class="label-inf">
                    <label for="">Car Name Model</label>
                </div>
                <div class="input-inf">
                    <select name="" id="">
                    <option value="">Accord</option>
                    <option value="">Amaze</option>
                    <option value="">BR-V</option>
                    <option value="">Brio</option>
                    <option value="">CR-V</option>
                    <option value="">City</option>
                    <option value="">Civic</option>
                    <option value="">Jazz</option>
                    <option value="">Mobilio</option>
                    <option value="">WR-V</option>
                    </select>
                </div>
            </div>
        </div>

        

        <div class="estimate-button-div flex-inf">
            <button class="estimate-button" @click="hideDiv"> Estimate</button>
        </div>
    </div>

    <!-- <div v-if="false" class="estimating">
        Estimating...
    </div> -->
    <div v-if="isHidden" class="estimate-result">
        <h2>According to the information provided, this client is fraud!</h2>
    </div>
       
    
    
</template>

<script>

    export default {
        data(){
            return {
                isHidden: false
            }
        },
  methods: {
    hideDiv() {
      this.isHidden = !this.isHidden;
    }
  }
    }

</script>

<style>
.estimating {
    margin-right: 300px;
    margin-top: 100px;
}
.model-body {
    width: 400px;
    height: 550px;
    background-color: black;
    margin-right: 300px;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    box-shadow: rgba(28, 23, 135, 0.24) 10px 3px 18px;
    border-radius: 4px;
    animation: fadeIn 1s ease-in-out forwards;
    margin-top: 158px;
}




.hidden {
  display: none;
}



.flex-inf {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.flex-honda {
    margin-top: 200px
}

.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
}

.estimate-button {
    width: 125px;
    height: 30px;
    border: 0;
    border-radius: 4px;
    text-decoration: none;
    color: aliceblue;
    background-color: black;
    cursor: pointer;
    transition:0.5s;
    opacity: 0.5;
}
.estimate-button:hover {
    border: 1px aliceblue solid;
    opacity: 1;
}

.model-body input {
    background-color: rgb(47, 41, 41);
    text-decoration: none;
    border: 0;
    color: aliceblue;
    border-radius: 2px;
}
.model-body select {
    background-color: rgb(47, 41, 41);
    text-decoration: none;
    border: 0;
    color: aliceblue;
    border-radius: 2px;
}
.model-body label {
    font-size: 13px;
}


 .estimate-result {
    white-space: nowrap;
    overflow: hidden;
    animation: animateWelcome 2s linear forwards;
    animation-fill-mode: forwards;
    animation-delay: 0s;
    margin-top: 100px;
    color: rgb(105, 15, 15);


 }

 @keyframes animateWelcome {
    0% {
    opacity: 0; /* Başlangıçta tamamen görünmez */
    transform: translateY(20px); /* Y ekseninde 20 piksel yukarı kaydırılmış */
  }
  100% {
    opacity: 1; /* Sonunda tamamen görünür */
    transform: translateY(0); /* Y ekseninde hiç kaydırma yok */
  }
}



@keyframes fadeIn {
  0% {
    opacity: 0; /* Başlangıçta tamamen görünmez */
    transform: translateY(20px); /* Y ekseninde 20 piksel yukarı kaydırılmış */
  }
  100% {
    opacity: 1; /* Sonunda tamamen görünür */
    transform: translateY(0); /* Y ekseninde hiç kaydırma yok */
  }
}
</style>