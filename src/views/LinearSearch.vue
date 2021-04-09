<template>
  <div v-for="(question, i) in linearSearch" :key="i">
    <button v-on:click="selected = i">{{ question.type }}</button>
    <component :is="question.type" v-if="selected == i" v-bind="question" />
  </div>
</template>

<script>
import Function from "../components/Function.vue";
import linearSearch from "../questions/linear-search/index.js";

export default {
  name: "LinearSearch",
  components: {
    Function,
  },
  data: function () {
    let selected = null;
    return {
      linearSearch,
      selected,
    };
  },
};
</script>
