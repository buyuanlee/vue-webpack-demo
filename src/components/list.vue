<template>
  <ul>
    <li>
      <router-link to="/helloworld">Hello World</router-link>
    </li>
    <li>
      <router-link to="/demo">demo</router-link>
    </li>
  </ul>

</template>

<script>
  export default {
    name: 'list'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
  }

  li {
    margin: 5px;
  }
</style>
