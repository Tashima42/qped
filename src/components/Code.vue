<template>
  <div class="hello-world">
    <h2>{{ header }}</h2>
    <div class="lines" v-for="(line, index) in copy" :key="index">
      <p v-if="line.length != 0">{{ line }}</p>
      <input type="text" v-if="line.length === 0" v-model="answer[index]" />
    </div>
    <div class="output">
      <h3>Output</h3>
      <div v-for="(line, index) in output" :key="index">
        <p>{{ line }}</p>
      </div>
    </div>
    <button v-on:click="verify(replaceLines, answer, source)">VERIFY</button>
  </div>
</template>

<script>
import Random from "../utils/random.js";
const random = new Random();

export default {
  name: "Code",
  props: {
    header: String,
    sourceCode: Array,
    output: Array,
  },
  methods: {
    verify(replaceLines, answer, base) {
      for (let i = 0; i < replaceLines.length; i++) {
        const index = replaceLines[i];
        if (answer[index] != base[index]) {
          alert(`Line ${index} is incorrect`);
          return;
        }
      }
      alert("Correct!");
    },
  },
  data: function () {
    const copy = this.sourceCode.slice(0),
      replaceLines = random
        .array(
          random.integer(1, Math.floor(this.sourceCode.length / 3)),
          1,
          this.sourceCode.length
        )
        .map((value) => value - 1);

    copy.forEach((line, index) => {
      replaceLines.forEach((element) => {
        if (element == index) {
          copy[index] = "";
        }
      });
    });
    return {
      copy,
      replaceLines,
      answer: copy.slice(0),
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
