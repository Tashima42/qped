<template>
  <button v-on:click="selected = 1">Multiple Choice</button>
  <multiple-choice
    v-if="selected == 1"
    :answer="queue.answer"
    :base="queue.base"
    header="Utilizando um algoritimo de fila, qual sera o resultado final?"
    :operations="queue.operations"
    :options="queue.options"
  />
</template>

<script>
import MultipleChoice from "../components/MultipleChoice.vue";
import queue from "../utils/questions-generator/simulation/queue.js";

export default {
  name: "Simulation",
  components: {
    MultipleChoice,
  },
  data: function () {
    let selected = null;
    return {
      queue,
      selected,
    };
  },
};
</script>
