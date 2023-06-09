<template>
  <div class="nav-bar">
    <div class="head"><img src="./assets/personal-logo.jpg" alt="logo"></div>
    <div class="links">
      <router-link class="page" to="/">Home</router-link>
      <router-link class="page" to="/models">Models</router-link>
      <router-link class="page" to="/about">About</router-link>
    </div>
  </div>

  <router-view></router-view>
  <div class="footer-bar">
    <div><AppFooterSection /></div>
  </div>
</template>

<script>
  import AppFooterSection from "@/components/AppFooterSection.vue"
  export default{
    components :{AppFooterSection}

  }


</script>

<style>

</style>
