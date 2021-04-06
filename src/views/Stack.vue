<template>
  <button v-on:click="selected = 0">Multiple Choice</button>
  <button v-on:click="selected = 1">Source Code</button>
  <multiple-choice
    v-if="selected == 0"
    :answer="stackMultiple.answer"
    :base="stackMultiple.base"
    header="Utilizando um algoritimo de pilha, qual sera o resultado final?"
    :operations="stackMultiple.operations"
    :options="stackMultiple.options"
  />
  <Code
    v-if="selected == 1"
    header="Complete as linhas"
    :output="stackCode.output"
    :sourceCode="stackCode.source"
  />
</template>

<script>
import MultipleChoice from "../components/MultipleChoice.vue";
import Code from "../components/Code.vue";
import stackCode from "../utils/questions-generator/code/stack.js";
import stackMultiple from "../utils/questions-generator/simulation/stack.js";

export default {
  name: "Simulation",
  components: {
    MultipleChoice,
    Code,
  },
  data: function () {
    let selected = null;
    return {
      selected,
      stackCode,
      stackMultiple,
    };
  },
};
</script>
