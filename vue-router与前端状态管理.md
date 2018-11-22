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

