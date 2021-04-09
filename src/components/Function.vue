<template>
  <div class="hello-world">
    <h2>{{ title }}</h2>
    <div class="lines" v-for="(line, index) in source" :key="index">
      <p>{{ line }}</p>
    </div>
    <div class="output">
      <h3>Output</h3>
      <input type="number" v-model="answer" />
    </div>
    <button v-on:click="verify()">VERIFY</button>
  </div>
</template>

<script>
export default {
  name: "Function",
  props: {
    title: String,
    source: Array,
    answer: String,
  },
  methods: {
    verify() {
      // TODO: implement ferify
      console.warn("IMPLEMENT VERIFY");
    },
  },
  data: function () {
    let answer;
    return {
      answer,
    };
  },
};
</script>

<style scoped>
.lines {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

p:first-child {
  align-self: flex-start;
}
a {
  color: #000000;
}

p {
  margin: 0;
  padding: 0;
}
</style>
