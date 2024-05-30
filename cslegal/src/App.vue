<template>
  <div id="app" style="width: 250px; margin: auto">
    <h1>This is CSLegal</h1>
    <label>
      Username
      <input placeholder="Username">
    </label>
    <label>
      Password
      <input placeholder="Password">
    </label>
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
