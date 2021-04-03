export default class Queue {
  _itens
  constructor(...itens) {
    this._itens = [...itens]
  }

  enqueue(item) {
    this._itens.push(item)
  }

  dequeue() {
    if (this.isEmpty())
      throw new Error("Underflow")
    this._itens.shift()
  }

  front() {
    if (this.isEmpty())
      throw new Error("Empty")
    return this._itens[0]
  }
  isEmpty() {
    return this._itens.length == 0
  }

  get() {
    return this._itens
  }
}