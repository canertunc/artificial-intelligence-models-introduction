<template>
    <div class="model-body">
        <div class="flex-row">
            <div class="credit-score flex-inf">
                <div class="label-inf">
                    <label for="">Face Image</label>
                </div>
                <div class="input-inf">
                    <input type="file" @change="uploadImage">
                </div>
            </div>
        </div>

        <div v-if="processedImageUrl">
            <img :src="processedImageUrl"  class="added-image">
        </div>
        <div class="estimate-button-div flex-inf">
            <button class="estimate-button">Estimate</button>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                processedImageUrl: '',
            }
        },
        methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;

        // Resim işleme işlemlerini burada gerçekleştirin
        // Örneğin, resmin boyutunu değiştirme, filtreleme vb.

        // İşlenmiş resim URL'sini ayarla
        this.processedImageUrl = image.src;
      };

      reader.readAsDataURL(file);
    }
  }
    }

</script>

<style>
.model-body {
    width: 400px;
    height: 550px;
    background-color: black;
    margin-right: 300px;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding-top: 20px;
    box-shadow: rgba(28, 23, 135, 0.24) 10px 3px 18px;
    border-radius: 4px;
    animation: fadeIn 1s ease-in-out forwards;
    margin-top: 158px;

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
    margin-bottom: 20px;
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

.added-image {
    width: 150px;
    height: 150px;
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