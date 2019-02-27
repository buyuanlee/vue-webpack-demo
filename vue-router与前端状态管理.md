# vue-router与前端状态管理

## vue-router路由基本加载
### 安装步骤
1. npm安装vue-router
```npm
npm install --save vue-router
```
2. 在入口文件中引用（./src/main.js）
```javascript
import router from 'vue-router'
Vue.use(router)
```
3. 配置路由文件，并在vue实例中注入（./src/main.js）
```javascript
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
  //注入vue实例
  router: rt,
  components: {App},
  template: '<App/>'
})
```
4. 确定视图的加载位置（./src/App.vue）
在需要加载的位置填写
```vue
<router-view></router-view>
```
## vue-router路由跳转
关键词：
```vue
<router-link to="/"></router-link>
```
demo:(list.vue)
```vue
<template>
  <ul>
    <li>
      <router-link to="/helloworld">HELLO WORLD</router-link>
    </li>
    <li>
      <router-link to="/helloearth">HELLO EARTH</router-link>
    </li>
  </ul>
</template>
```

## 路由参数的传递
1. 必须在路由内加入路由的name
2. 必须在path后加入传递的参数（/：传递参数）
3. 传递参数和接收参数代码如下  
- 传递方法一：（常用：传递过来的参数是经过转码的    
查询方式：`/hello/xxx`
    
**./src/components/list.vue中传递**
```vue
<router-link 
:to="{name:'hello',params:{msg:'hello啊,小老弟'}}">
  Hello World
</router-link>
```
- 传递方法二（不常用：）   
查询方式：`/hello?name=xxx&count=xxx`
```vue
<router-link
:to="{path:'/hello',query:{msg:hello啊,小老弟}}">
  Hello World
</router-link>
```
你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于
路由的值结合等等。
```vue
const router = new VueRouter({
  routes: [
  { path: '/search', component: SearchUser, props: (route) => ({
  query: route.query.q }) }
  ]
})
```

- 接收方法
**./src/components/demo.vue中读取参数**
```vue
$route.params.xxx
```

## Axios中的请求
### 介绍
> axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端    

特征如下：
- 从浏览器中创建 XMLHttpRequest
- 从 node.js 发出 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防止 CSRF/XSRF

### 安装方法：
1. npm安装axios
```npm
npm install axios
```
### Axios中的get请求



