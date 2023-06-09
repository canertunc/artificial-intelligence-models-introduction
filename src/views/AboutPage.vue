<template>
    <div class="about">
        <div class="about-logo">
            <img src="../assets/personal-logo.jpg" alt="logo">
        </div>
        <div class="about-detail">
            Hello guys, my name is Caner Tunç, I am a software engineering student and I am developing myself
            in the field of artificial intelligence as well as in the field of web and I created this website
            to share my artificial intelligence models that I have developed.

        </div>
        <div class="about-author">
            Caner Tunç
        </div>
    </div>
    <div class="footer-bar footer-in-about">
        <AppFooterSection />
    </div>
</template>

<style>
    .about {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 134px;
        background-color: black;
        opacity: 0.9;
        margin-left: 600px;
        margin-right: 600px;
        gap: 40px;
        
    }
    .about img {
        width: 150px;
        height: 150px;
        border-radius: 99%;
    }
    .about-detail{
        padding: 20px 20px;
        text-align: center;
    }
    .about-author {
        margin-bottom: 20px;
    }
    .footer-in-about {
        margin-top: 71px;
    }
</style>