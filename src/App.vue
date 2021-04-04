<template>
  <div id="router">
    <router-link to="/simulation">Simulation</router-link>
    <router-link to="/source-code">Source Code</router-link>
    <router-link to="/function">Function</router-link>
    <hr class="line" />
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

.line {
  width: 500px;
  height: 0.1px;
}

#router {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
