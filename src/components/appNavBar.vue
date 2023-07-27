<template>
    <div class="nav-bar" :class="{ scrolled: isScrolled  }">
  
      <div class="head">
        <div>
        <img src="../../public/new2.jpg" alt="logo">
        </div>
        <div>
          <h2>DopingAI</h2>
        </div>
      </div>
  
      <div class="links">
        <router-link class="page" to="/">Home</router-link>
        <router-link class="page" to="/modelverse">ModelVerse</router-link>
        <router-link class="page" to="/modelguide">ModelGuide</router-link>
        <router-link class="page" to="/algorithmspage">Algorithms</router-link>
        <router-link class="page" to="/about">About</router-link>
        <router-link class="page" to="/contact">Contact</router-link>
      </div>
    </div>
  
    <router-view></router-view>
  </template>
  

<script>

  export default {
    data(){
      return {
        isScrolled : false,

      }
    },
    mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },

   
  }
  }


</script>

  <style>
  
  .head {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  
  }
  .nav-bar {
    position: fixed;
    transition: background-color 0.1s ease;
  }
  .scrolled {
    background-color: black;
  }
  .white {
    background-color: white;
  }
  
  </style>