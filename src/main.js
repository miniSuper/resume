// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import fastclick from 'fastclick'
import 'common/stylus/main.styl'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'common/css/video-theme.css'
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.prototype.$http = axios
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
