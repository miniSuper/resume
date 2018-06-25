<template>
  <div id="app">
    <!-- <img src="./assets/head.jpg"> -->
    <music-btn></music-btn>
    <router-view/>
    <tab></tab>
  </div>
</template>

<script>
import Tab from 'base/tab/tab'
import MusicBtn from 'base/music-btn/music-btn'

export default {
  name: 'App',
  components: {
    Tab,
    MusicBtn
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
