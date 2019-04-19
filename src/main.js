// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/reset.css'
import axios from 'axios'
import musicBar from '@/components/musicBar'
import musicPlayer from '@/components/musicPlayer'
Vue.use(Antd)

Vue.config.productionTip = false
// 全局添加axios请求模块
Vue.prototype.$axios = axios
// 全局添加eventBus
Vue.prototype.$eventBus = new Vue()
// 全局添加播放器组件
Vue.component('musicBar', musicBar)
Vue.component('musicPlayer', musicPlayer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
