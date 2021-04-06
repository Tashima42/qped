<template>
  <Function
    header="Linear Search"
    :sourceCode="linearSearchFunction.sourceCode"
  />
</template>

<script>
import Function from "../components/Function.vue";
import linearSearchFunction from "../utils/questions-generator/function/linear-search.js";

export default {
  name: "LinearSearch",
  components: {
    Function,
  },
  data: function () {
    return {
      linearSearchFunction,
    };
  },
};
</script>
