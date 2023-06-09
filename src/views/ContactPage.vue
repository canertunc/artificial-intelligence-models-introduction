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

    <div class="footer-bar footer-in-contact">
        <AppFooterSection />
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

</style>