<template>
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

</style>