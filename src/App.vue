<template>
  <div id="router">
    <router-link to="/stack">Stack</router-link>
    <router-link to="/queue">Queue</router-link>
    <router-link to="/linear-search">Linear Search</router-link>
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
