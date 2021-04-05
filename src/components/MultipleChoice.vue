<template>
  <div class="simulation">
    <h2>{{ header }}</h2>
    <div class="stack">
      <p>{{ base }}</p>
    </div>
    <h3>Operations</h3>
    <div class="operations">
      <ol type="1">
        <li v-for="(operation, index) in operations" :key="index">
          {{ operation }}
        </li>
      </ol>
    </div>
    <h3>Options</h3>
    <div class="options">
      <div v-for="(option, index) in options" :key="index">
        <input type="radio" :id="index" :value="index" v-model="selected" />
        <label>{{ option }}</label>
      </div>
    </div>
  </div>
  <div class="buttons">
    <button v-on:click="selected = null">RESET</button>
    <button v-on:click="verifyResult(options[selected], answer)">VERIFY</button>
  </div>
</template>

<script>
export default {
  name: "MultipleChoice",
  props: {
    header: String,
    base: String,
    answer: String,
    operations: Array,
    options: Array,
  },
  methods: {
    verifyResult: function (base, compare) {
      if (base.get() == compare.get()) {
        window.alert("Correto");
      } else {
        window.alert("Errado");
      }
    },
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