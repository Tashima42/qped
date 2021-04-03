export default class Stack {
  _itens
  constructor(...itens) {
    this._itens = [...itens]
  }
  push(item) {
    this._itens.push(item)
  }

  pop() {
    if (this.isEmpty())
      throw new Error("Underflow")
    this._itens.pop()
  }

  peek() {
    return this._itens[this._itens.length - 1]
  }

  isEmpty() {
    return this._itens.length == 0
  }

  get() {
    return this._itens.slice(0)
  }
}