<template>
  <div class="hello-world">
    <p>
      <router-link to="/source-code">Source Code</router-link> /
      <router-link to="/source-code/hello-world">Hello World</router-link>
    </p>
    <h2>Complete as linhas que estao faltando</h2>
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
  name: "HelloWorld",
  methods: {
    verify(replaceLines, answer, base) {
      const correct = [];
      replaceLines.forEach((i) => {
        if (answer[i] == base[i]) correct.push({ i, correct: true });
        else correct.push({ i, correct: false });
      });
      correct.forEach((line) => {
        if (line.correct === false) alert(`Line ${line.i} is incorrect`);
      });
    },
  },
  data: function () {
    const source = [
        "#include <stdio.h>",
        "int main()",
        "{",
        'printf("Hello World");',
        "return 0;",
        "}",
      ],
      output = ["Hello World"],
      copy = source.slice(0),
      replaceLines = random
        .array(
          random.integer(1, Math.floor(source.length / 3)),
          1,
          source.length
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
      output,
      replaceLines,
      source,
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
