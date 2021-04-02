<template>
  <div class="simulation">
    <h1>Utilizando um algoritimo de pilha, qual sera o resultado final?</h1>
    <p>{{ stack }}</p>
    <h3>Operations</h3>
    <div class="operations">
      <ol type="1">
        <li
          v-for="(operation, index) in operations"
          :key="index"
          v-html="operation"
        ></li>
      </ol>
    </div>
    <h3>Options</h3>
    <div class="options">
      <div v-for="(option, index) in options" :key="index">
        <input type="radio" :id="index" :value="index" v-model="selected" />
        <label>{{ option }}</label>
      </div>
    </div>
    <p><b>Selected: </b>{{ options[selected] }}</p>
  </div>
  <button v-on:click="selected = null">RESET</button>
  <button v-on:click="verifyResult(options[selected], answer)">VERIFY</button>
</template>

<script>
import { integer, shuffleArray } from "../utils/random.js";
export default {
  name: "Simulation",
  methods: {
    verifyResult: function (base, compare) {
      if (base == compare) {
        window.alert("Correto");
        window.location.reload(true);
      } else {
        window.alert("Errado");

      }
    },
  },
  data: function () {
    const operations = [],
      stack = createRandomArray(10, 1, 100),
      copy = stack.slice(0),
      numberOfOperations = integer(3, 5);
    let options = [],
      selected = null;

    for (let i = 0; i < numberOfOperations; i++) {
      const pop = integer(1, 2) - 1 == true;
      if (pop) {
        copy.pop();
        operations.push("pop()<br />");
      } else {
        const random = integer(1, 100);
        copy.push(random);
        operations.push(`push(${random})<br />`);
      }
    }

    function createOptions(base, numberOfOperations) {
      const copy = base.slice(0);
      for (let i = 0; i < numberOfOperations; i++) {
        const pop = integer(1, 2) - 1 == true;
        if (pop) {
          copy.pop();
        } else {
          const random = integer(1, 100);
          copy.push(random);
        }
      }
      return copy;
    }

    for (let i = 0; i < 4; i++) {
      options.push(createOptions(stack, numberOfOperations));
    }
    options.push(copy);
    options = shuffleArray(options);

    function createRandomArray(elements, min, max) {
      //if (min <= 0) throw new Error("min can't be equal or less than 0");
      const stack = [];
      for (let i = 0; i < elements; i++) {
        stack.push(integer(min, max));
      }
      return stack;
    }

    return {
      operations,
      stack,
      answer: copy,
      options,
      selected,
    };
  },
};
</script>

<style scoped>
.simulation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.operations .options {
  display: flex;
  flex-direction: column;
}
.operations ol {
  text-align: left;
}
.options ol {
  text-align: left;
}
</style>