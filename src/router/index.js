import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import demo from '../components/demo'

Vue.use(router)

//配置路由
export default new router({
  routes: [{
    name: 'hello',
    //指定要跳转的路径
    path: '/hello/:msg',
    //指定要跳转的组件
    component: HelloWorld
  },
    {
      //指定要跳转的路径
      name: 'demo',
      path: '/demo/:msg',
      //指定要跳转的组件
      component: demo
    }]
})
