<template>
  <div id="router">
    <router-link to="/simulation">Simulation</router-link>
    <router-link to="/source-code">Source Code</router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#router {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
