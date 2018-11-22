// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(router)
Vue.config.productionTip = false

//配置路由
var rt = new router({
  routes: [{
    //指定要跳转的路径
    path: '/hello',
    //指定要跳转的组件
    component: HelloWorld
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: rt,
  components: {App},
  template: '<App/>'
})

