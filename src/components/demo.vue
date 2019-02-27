<template>
  <div>
    <h1>我是一个demo</h1>
    <h2>Essential Links</h2>
    <h3>{{$route.params.msg}}</h3>
  </div>

</template>

<script>
  export default {
    name: 'demo',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  color: orange;
}
</style>
