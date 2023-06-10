<template>
    <div class="contact">
        <div class="contact-mail">
            <a :href="mailURL" class="mail-link">canertunc982@gmail.com</a>
        </div>
        <div class="contact-github-linkedln">
            <div class="contact-images">
                <a :href="githubURL" target = "blank"><img src="@/assets/github-icon.png" alt="github-icon"></a>
                <a :href="linkedlnURL" target = "blank"><img src="@/assets/linkedln-icon.png" alt="linkedln-icon"></a>
            </div>
        </div>
    </div>


</template>

<script>

    export default {
        data(){
            return {
                mailURL : "mailto:canertunc982@gmail.com",
                githubURL : "https://github.com/canertunc",
                linkedlnURL : "https://www.linkedin.com/in/caner-tun%C3%A7-7592291b8/",
            }
        },
    };

</script>

<style>
    .contact {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 154px;
        background-color: black;
        opacity: 0.9;
        margin-left: 600px;
        margin-right: 600px;
        gap: 40px;
        border-radius: 4px;
        box-shadow: rgba(28, 23, 135, 0.24) 10px 3px 18px;
        animation: fadeIn 1s ease-in-out forwards;

    }
    .mail-link {
        text-decoration: none;
        color: aliceblue;
    }
    .contact-mail {
        margin-top: 100px;
    }
    .contact-github-linkedln img {
        width: 50px;
        height: 50px;
        margin-left: 25px;
        margin-right: 25px;
        margin-bottom: 100px;
    }
    .contact-images {
        text-align: center;
    }
    .footer-in-contact {
        margin-top: 200px;
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