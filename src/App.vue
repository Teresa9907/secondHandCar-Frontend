<template>
 <!-- <personal-page></personal-page> -->
 <home-page></home-page>
 <!-- <LoginWindow></LoginWindow> -->
</template>


<script>

import PersonalPage from './components/PersonalPage.vue'
import HomePage from './components/HomePage.vue'
// import LoginWindow from './components/tabs/LoginWindow.vue'
export default {
  name: 'App',
  components: {
    PersonalPage,
    HomePage
    // LoginWindow
  },
  data() {
    return {
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

@import './style/container.css'
</style>
