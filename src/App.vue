<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/tickets">Tickets</router-link>
      <router-link to="/basket"><font-awesome-icon icon="shopping-basket" /></router-link>
    </div>
    <router-view/>
    <div id="footer">
      <p>footer</p>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 78px;
}
#nav {
  padding: 30px;
  background-color: #000;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  a {
    font-weight: bold;
    color: #aaa;
    text-decoration: none;
    padding: 0 10px;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}
#footer {
  width: 100%;
  color: #fff;
  background-color: #000;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>

<script>
  

</script>