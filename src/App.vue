<template>
  <div id="app">
  <!-- Main  NavBar -->
  <nav id="home" class="navbar navbar-expand-md navbar-light bg-light fixed-top">

    <div class="container" role="navigation">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="navbar-toggler-icon"></span>
        </button>

      <router-link to="/">
        <img width="100" height="50" src="./assets/vetRansLogo.svg" alt="vetLogo"></router-link>

      <div class="collapse navbar-collapse" data-toggle="collapse" data-target=".navbar-collapse">
        <ul class="navbar-nav mr-auto">
      <li class="nav-item"><router-link class="nav-link" to="/services">SERVICES</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/about">ABOUT</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/employment">EMPLOYMENT</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/contact">CONTACT</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- /MainNavbar -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin-top: 100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.red{
  font-weight: bold;
  color: #990000;
}

.blue {
  font-weight: bold;
  color: #00007f;
}
</style>
