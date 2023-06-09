<template>
  <div class="nav-bar">
    <div class="head"><img src="./assets/personal-logo.jpg" alt="logo"></div>
    <div class="links">
      <router-link class="page" to="/">Home</router-link>
      <router-link class="page" to="/models">Models</router-link>
      <router-link class="page" to="/about">About</router-link>
      <router-link class="page" to="/contact">Contact</router-link>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>


</script>

<style>

</style>
