<template>
  <button v-on:click="selected = 'stack'">Stack</button>
  <button v-on:click="selected = 'queue'">Queue</button>
  <multiple-choice
    v-if="selected == 'stack'"
    :answer="queue.answer"
    :base="queue.base"
    header="Utilizando um algoritimo de fila, qual sera o resultado final?"
    :operations="queue.operations"
    :options="queue.options"
  />
  <multiple-choice
    v-if="selected == 'queue'"
    :answer="stack.answer"
    :base="stack.base"
    header="Utilizando um algoritimo de pilha, qual sera o resultado final?"
    :operations="stack.operations"
    :options="stack.options"
  />
</template>

<script>
import MultipleChoice from "../components/MultipleChoice.vue";
import stack from "../utils/questions-generator/simulation/stack.js";
import queue from "../utils/questions-generator/simulation/queue.js";

export default {
  name: "Simulation",
  components: {
    MultipleChoice,
  },
  data: function () {
    let selected = null;
    return {
      stack,
      queue,
      selected,
    };
  },
};
</script>
