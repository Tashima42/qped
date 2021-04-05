import Random from "../random.js"
const random = new Random()
import Queue from "../algorithms/Queue"

const operations = [],
  queue = new Queue(...random.array(10, 1, 100)),
  copy = new Queue(...queue.get()),
  numberOfOperations = random.integer(3, 5);
let options = []

for (let i = 0; i < numberOfOperations; i++) {
  // generates a random number between 1 and 2, decreases by 1 and test if it's true or false
  if (random.bool()) {
    copy.dequeue();
    operations.push("dequeue()");
  } else {
    const randomInt = random.integer(1, 100);
    copy.enqueue(randomInt);
    operations.push(`enqueue(${randomInt})`);
  }
}

function createOptions(base, numberOfOperations) {
  const copy = new Queue(...[...base.get()].slice(0));
  for (let i = 0; i < numberOfOperations; i++) {
    if (random.bool()) {
      copy.dequeue();
    } else {
      copy.enqueue(random.integer(1, 100));
    }
  }
  return copy;
}

for (let i = 0; i < 4; i++) {
  options.push(createOptions(queue, numberOfOperations).get());
}
options.push(copy);
options = random.shuffleArray(options);

const base = queue.get()
const answer = copy.get()
export default {
  answer,
  base,
  operations,
  options
}
