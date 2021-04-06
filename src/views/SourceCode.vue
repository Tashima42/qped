<template>
  <button v-on:click="selected = 'hello-world'">Hello World</button>
  <Code
    v-if="selected == 'hello-world'"
    header="Complete as linhas"
    :output="helloWorld.output"
    :sourceCode="helloWorld.source"
  />
</template>

<script>
import Code from "../components/Code.vue";
import helloWorld from "../utils/questions-generator/code/hello-world.js";
export default {
  name: "SourceCode",
  components: {
    Code,
  },
  data: function () {
    let selected = null;
    return {
      helloWorld,
      selected,
    };
  },
};
</script>
