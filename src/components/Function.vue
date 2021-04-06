<template>
  <div class="hello-world">
    <h2>{{ header }}</h2>
    <div class="lines" v-for="(line, index) in sourceCode" :key="index">
      <p>{{ line }}</p>
    </div>
    <div class="output">
      <h3>Output</h3>
      <input type="number" v-model="output" />
    </div>
    <button v-on:click="verify()">VERIFY</button>
  </div>
</template>

<script>
export default {
  name: "Function",
  props: {
    sourceCode: Array,
    header: String,
    //findIndex: Number,
  },
  methods: {
    verify() {},
  },
  data: function () {
    let output;
    return {
      output,
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
