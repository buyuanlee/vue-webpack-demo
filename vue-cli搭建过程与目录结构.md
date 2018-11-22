# Vue-cli脚手架工具搭建项目

##  目的：掌握安装流程以及目录结构

##  背景介绍

1. 操作系统：macOS-Mojava  版本：10.14.1
2. node 版本：v8.11.3
3. npm 版本：6.4.1

## 安装步骤

1. 全局安装`vue-cli`

1. ```shell
   npm install -g vue-cli
   ```

   mac用户在此处如果有报错，可尝试获取权限执行

   ```shell
   sudo npm install -g vue-cli
   ```

2. cd至目录，初始化项目

   ```shell
   vue init webpack 
   ```

   也可在此处创建一个项目目录

   ```shell
   vue init webpack my-project
   ```

3. cd至项目内，如果是在本文件夹安装不需要操作

   ```shell
   cd my-project
   ```

4. 安装依赖

   ```shell
   npm install
   ```

5. 启动项目

6. ```shell
   npm run dev
   ```

安装结束后，打开http://localhost:8080查看效果

![效果](/Users/lee/Desktop/WX20181121-203716.png)

进入项目文件夹，目录结构如下：![目录结构](/Users/lee/Desktop/WX20181121-203904.png)



## 目录结构介绍

### build：项目构建（webpack）相关代码

- build.js：生产环境构建代码
- check-versions.js：检查node、npm等版本
- dev-client.js：热加载相关
- dev-server.js：构建本地服务
- utils.js:构建配置公用工具
- vue-loader.conf.js：vue加载器
- webpack.base.conf.js：webpack基础环境配置
- webpack.dev.conf.js：webpack开发环境配置
- webpack.prod.conf.js：webpack生产环境配置

### config：项目开发环境配置相关代码

- dev.env.js：开发环境变量
- index.js：项目配置环境变量
- prod.env.js：生产环境变量

### node_modules：项目依赖模块

### src：源码目录

- assets：资源目录
- components：vue公共组件
- router：前端路由
  - index.js：路由配置文件
- APp.vue：页面入口文件（根组件）
- main.js：程序入口文件

### static：静态文件：（图片，json数据等）

### 其余

- .babelrc// ES6语法编译配置
- .editorconfig// 定义代码格式
- .gitignore// git上传需要忽略的文件格式
- index.html// 入口页面
- package.json// 项目基本信息
-  README.md// 项目说明

