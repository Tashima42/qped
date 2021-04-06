import Random from "../../random.js"
const random = new Random()
import Stack from "../../algorithms/Stack.js"

const operations = [],
  stack = new Stack(...random.array(10, 1, 100)),
  copy = new Stack(...stack.get()),
  numberOfOperations = random.integer(3, 5);
let options = []

for (let i = 0; i < numberOfOperations; i++) {
  // generates a random number between 1 and 2, decreases by 1 and test if it's true or false
  if (random.bool()) {
    copy.pop();
    operations.push("pop()");
  } else {
    const randomInt = random.integer(1, 100);
    copy.push(randomInt);
    operations.push(`push(${randomInt})`);
  }
}
function createOptions(base, numberOfOperations) {
  const copy = new Stack(...[...base.get()].slice(0));
  for (let i = 0; i < numberOfOperations; i++) {
    if (random.bool()) {
      copy.pop();
    } else {
      copy.push(random.integer(1, 100));
    }
  }
  return copy;
}

for (let i = 0; i < 4; i++) {
  options.push(createOptions(stack, numberOfOperations).get());
}
options.push(copy.get());
options = random.shuffleArray(options);

const base = stack.get()
const answer = copy.get()

export default {
  operations,
  base,
  answer,
  options,
}