// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css' // 1px像素解决方案
import fastClick from 'fastclick' // 1、解决移动端点击延迟300ms

Vue.config.productionTip = false
fastClick.attach(document.body) // 2、解决移动端点击延迟300ms

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
