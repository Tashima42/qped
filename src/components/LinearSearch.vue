<template>
  <div class="hello-world">
    <p>
      <router-link to="/function">Function</router-link> /
      <router-link to="/function/linear-search">Linear Search</router-link>
    </p>
    <h2>Dada a seguinte funcao</h2>
    <div class="lines" v-for="(line, index) in source" :key="index">
      <p>{{ line }}</p>
    </div>
    <div class="output">
      <h3>Output</h3>
      <input type="number" v-model="output" />
    </div>
    <button v-on:click="verify(output, findIndex)">VERIFY</button>
  </div>
</template>

<script>
import Random from "../utils/random.js";
const random = new Random();
import linearSearch from "../utils/algorithms/LinearSearch.js";

export default {
  name: "LinearSearch",
  methods: {
    verify(answer, correct) {
      if (answer == correct) {
        alert("Correct");
      } else {
        alert("Incorrect");
      }
    },
  },
  data: function () {
    const numberOfElements = random.integer(5, 10),
      arr = random.array(numberOfElements, 1, 100),
      findElement = arr[random.integer(1, numberOfElements) - 1],
      findIndex = linearSearch(arr, findElement),
      source = [
        "#include <stdio.h>",
        "int linear_search(int arr_length, int find_element) {",
        "for(int i = 0; i <  arr_length; i++) {",
        "if(arr[i] == find_element) {",
        "return i;",
        "} } }",
        "int main()",
        "{",
        `int arr_length = ${numberOfElements}`,
        `int arr[arr_length] = {${arr.toString()}};`,
        `printf("%d", linear_search(arr, arr_length, ${findElement}));`,
        "return 0;",
        "}",
      ];
    let output;

    return {
      output,
      source,
      findIndex,
      arr,
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
