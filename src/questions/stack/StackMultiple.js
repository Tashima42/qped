import MultipleChoice from "../../utils/abstractions/MultipleChoice"
import Random from "../../utils/random.js"
const random = new Random()
import Stack from "../../utils/algorithms/Stack.js"


export class StackMultiple extends MultipleChoice {
  constructor() {
    super() // REQUIRED

    // PRIVATE
    this._stack = new Stack(...random.array(10, 1, 100))
    this._copy = new Stack(...this._stack.get())
    this._numberOfOperations = random.integer(3, 5)

    // PUBLIC
    this.title = "Utilizando um algoritimo de fila, qual sera o resultado final?"
    this.operations = this._createOperations()
    this.options = this._createOptions(4)
    this.base = `${this._stack.get().toString()}`
    this.answer = `${this._copy.get().toString()}`

    // ALWAYS TEST
    this.test(
      this.type,
      this.title,
      this.base,
      this.operations,
      this.options,
      this.answer
    )
  }

  verify(selected, answer) {
    if (selected == answer) {
      return true
    } else {
      return false
    }
  }
  _createOperations() {
    const operations = []
    for (let i = 0; i < this._numberOfOperations; i++) {
      if (random.bool()) {
        this._copy.pop();
        operations.push("pop()");
      } else {
        const randomInt = random.integer(1, 100);
        this._copy.push(randomInt);
        operations.push(`push(${randomInt})`);
      }
    }
    return operations
  }

  _createOptions(numberOfOptions) {
    const options = []
    for (let i = 0; i < numberOfOptions; i++) {
      const copy = new Stack(...[...this._stack.get()].slice(0));
      for (let j = 0; j < this._numberOfOperations; j++) {
        if (random.bool()) {
          copy.pop();
        } else {
          copy.push(random.integer(1, 100));
        }
      }
      options.push(copy.get())
    }
    options.push(this._copy.get())
    return random.shuffleArray(options);
  }
}
