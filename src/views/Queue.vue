<template>
  <div v-for="(question, i) in queue" :key="i">
    <button v-on:click="selected = i">{{ question.type }}</button>
    <component :is="question.type" v-if="selected == i" v-bind="question" />
  </div>
</template>

<script>
import MultipleChoice from "../components/MultipleChoice.vue";
import queue from "../questions/queue/index.js";

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
