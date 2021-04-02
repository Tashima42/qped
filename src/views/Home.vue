<template>
  <div class="home">
    <Simulation />
  </div>
</template>

<script>
// @ is an alias to /src
import Simulation from "@/components/Simulation.vue";

export default {
  name: "Home",
  components: {
    Simulation,
  },
};
</script>
