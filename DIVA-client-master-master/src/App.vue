<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Diagnostic from './components/Diagnostic.vue'
import GuestSignUp from './components/GuestWelcome.vue'
import router from './router/index.js'
import $ from 'jquery'
export default {
  name: 'App',
   components: {
    Home,
    Diagnostic
  },
  methods:{
     analysisMode: function() {
          router.push('/diagnostic')
        },
          landingMode: function() {
          router.push('/')
          location.reload();
        },
         GuestSignUpExperience: function() {
          router.push('/guest')
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  background-color: #000000;
}
</style>
