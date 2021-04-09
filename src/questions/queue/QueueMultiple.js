import MultipleChoice from "../../utils/abstractions/MultipleChoice"
import Random from "../../utils/random.js"
const random = new Random()
import Queue from "../../utils/algorithms/Queue"

export class QueueMultiple extends MultipleChoice {
  constructor() {
    super()

    // PRIVATE
    this._queue = new Queue(...random.array(10, 1, 100))
    this._copy = new Queue(...this._queue.get())
    this._numberOfOperations = random.integer(3, 5)

    // PUBLIC
    this.title = "Utilizando um algoritimo de fila, qual sera o resultado final?"
    this.operations = this._createOperations()
    this.options = this._createOptions(4)
    this.base = `[${this._queue.get().toString()}]`
    this.answer = `[${this._copy.get().toString()}]`

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
        this._copy.dequeue();
        operations.push("dequeue()");
      } else {
        const randomInt = random.integer(1, 100);
        this._copy.enqueue(randomInt);
        operations.push(`enqueue(${randomInt})`);
      }
    }
    return operations
  }

  _createOptions(numberOfOperations) {
    const options = []
    for (let i = 0; i < numberOfOperations; i++) {
      const copy = new Queue(...[...this._queue.get()].slice(0))
      for (let j = 0; j < this._numberOfOperations; j++) {
        if (random.bool()) {
          copy.dequeue()
        } else {
          copy.enqueue(random.integer(1, 100))
        }
      }
      options.push(copy.get())
    }
    options.push(this._copy.get())
    return random.shuffleArray(options)
  }
}
