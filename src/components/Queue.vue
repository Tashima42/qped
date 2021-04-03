<template>
  <div class="simulation">
    <p>
      <router-link to="/simulation">Simulacao</router-link> /
      <router-link to="/queue">Queue</router-link>
    </p>
    <h2>Utilizando um algoritimo de fila, qual sera o resultado final?</h2>
    <div class="stack">
      <p>{{ queue.get() }}</p>
    </div>
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
        <label>{{ option.get() }}</label>
      </div>
    </div>
  </div>
  <div class="buttons">
    <button v-on:click="selected = null">RESET</button>
    <button v-on:click="verifyResult(options[selected], answer)">VERIFY</button>
  </div>
</template>

<script>
import Random from "../utils/random.js";
const random = new Random();

import Queue from "../utils/algorithms/Queue.js";
export default {
  name: "Queue",
  methods: {
    verifyResult: function (base, compare) {
      if (base.get() == compare.get()) {
        window.alert("Correto");
        //window.location.reload(true);
      } else {
        window.alert("Errado");
      }
    },
  },
  data: function () {
    const operations = [],
      queue = new Queue(...createRandomArray(10, 1, 100)),
      copy = new Queue(...queue.get()),
      numberOfOperations = random.integer(3, 5);
    let options = [],
      selected = null;

    for (let i = 0; i < numberOfOperations; i++) {
      // generates a random number between 1 and 2, decreases by 1 and test if it's true or false
      if (random.bool()) {
        copy.dequeue();
        operations.push("dequeue()<br />");
      } else {
        const randomInt = random.integer(1, 100);
        copy.enqueue(randomInt);
        operations.push(`enqueue(${randomInt})<br />`);
      }
    }

    function createOptions(base, numberOfOperations) {
      const copy = new Queue(...[...base.get()].slice(0));
      for (let i = 0; i < numberOfOperations; i++) {
        if (random.bool()) {
          copy.dequeue();
        } else {
          copy.enqueue(random.integer(1, 100));
        }
      }
      return copy;
    }

    for (let i = 0; i < 4; i++) {
      options.push(createOptions(queue, numberOfOperations));
    }
    options.push(copy);
    options = random.shuffleArray(options);

    function createRandomArray(elements, min, max) {
      if (min <= 0) throw new Error("min can't be equal or less than 0");
      const queue = [];
      for (let i = 0; i < elements; i++) {
        queue.push(random.integer(min, max));
      }
      return queue;
    }

    return {
      operations,
      queue,
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
  width: 50vw;
}
span {
  color: green;
}
p:first-child {
  align-self: flex-start;
}
a {
  color: #000000;
}
.stack {
  background-color: #e0e0e0;
  border-radius: 5px;
  width: 500px;
  height: 50px;
}
.stack p {
  text-decoration: none;
}
.operations {
  text-align: left;
}
.options {
  text-align: left;
}
button {
  margin: 10px;
}
</style>