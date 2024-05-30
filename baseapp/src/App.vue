<template>
  <div id="app">
    <h1>This is base app</h1>
    <Button/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    Button: () => import("feComponent/Button")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
