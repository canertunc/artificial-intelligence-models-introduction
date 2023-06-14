<template>
    <div class="nav-bar">
  
      <div class="head">
        <div>
        <img src="@/assets/personal-logo.jpg" alt="logo">
        </div>
        <div>
          <h2>DopingAI</h2>
        </div>
      </div>
  
      <div class="links">
        <router-link class="page" to="/">Home</router-link>
        <router-link class="page" to="/models">Models</router-link>
        <router-link class="page" to="/about">About</router-link>
        <router-link class="page" to="/contact">Contact</router-link>
      </div>
    </div>
  
    <router-view></router-view>
  </template>
  
  <style>
  
  .head {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  
  }
  
  </style>