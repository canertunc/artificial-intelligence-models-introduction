<template>
    <div class="model-body" v-if="!isHidden">
        

        <div class="flex-row">
            <div class="credit-score flex-inf">
                <div class="label-inf">
                    <label for="">Credit Score</label>
                </div>
                <div class="input-inf">
                    <input type="number" min="0" max="1000">
                </div>
            </div>

            <div class="geography flex-inf">
                <div class="label-inf">
                    <label for="">Geography</label>
                </div>
                <div class="input-inf">
                    <select name="" id="">
                        <option value="">France</option>
                        <option value="">Germany</option>
                        <option value="">Spain</option>
                    </select>
                </div>
            </div>

        </div>

        <div class="flex-row">

            <div class="gender flex-inf">
                <div class="label-inf">
                    <label for="">Gender</label>
                </div>
                <div class="input-inf">
                    <select name="" id="">
                        <option value="">Female</option>
                        <option value="">Male</option>
                    </select>
                </div>
            </div>
            <div class="credit-score flex-inf">
                <div class="label-inf">
                    <label for="">Age</label>
                </div>
                <div class="input-inf">
                    <input type="number" min="18" max="125">
                </div>
            </div>
        </div>

        <div class="credit-score flex-inf">
            <div class="label-inf">
                <label for="">Time Spent in the Bank</label>
            </div>
            <div class="input-inf">
                <input type="number" min="0" max="12">
            </div>
        </div>

        <div class="credit-score flex-inf">
            <div class="label-inf">
                <label for="">Number of Products</label>
            </div>
            <div class="input-inf">
                <input type="number" min="1" max="4">
            </div>
        </div>
        <div class="flex-row">
            <div class="credit-score flex-inf">
                <div class="label-inf">
                    <label for="">Credit Car</label>
                </div>
                <div class="input-inf">
                    <select name="" id="">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
            </div>

            <div class="credit-score flex-inf">
                <div class="label-inf">
                    <label for="">Active</label>
                </div>
                <div class="input-inf">
                    <select name="" id="">
                        <option value="">Yes</option>
                        <option value="">No</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="credit-score flex-inf">
            <div class="label-inf">
                <label for="">Estimated Salary(Yearly)</label>
            </div>
            <div class="input-inf">
                <input type="number" min="0" max="200000">
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