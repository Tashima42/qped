<template>
  <div v-for="(question, i) in stack" :key="i">
    <button v-on:click="selected = i">{{ question.type }}</button>
    <component :is="question.type" v-if="selected == i" v-bind="question" />
  </div>
</template>

<script>
import MultipleChoice from "../components/MultipleChoice.vue";
import Code from "../components/Code.vue";
import stack from "../questions/stack/index.js";

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
      stack,
    };
  },
};
</script>
