export default class MultipleChoice {
  type = "MultipleChoice" // Same name as the component
  title // String
  base // String
  operations // Array<String>
  options // Array<String>
  answer // String
  constructor() {
    this.verify()
  }

  verify() {
    throw new Error("verify is not implemented")
  }

  test(type, title, base, operations, options, answer) {
    if (type != "MultipleChoice") {
      throw new Error("type must be 'MultipleChoice'")
    }
    if (typeof (title) != "string") {
      throw new Error("title must be a string")
    }
    if (typeof (base) != "string") {
      throw new Error("base must be a string")
    }
    if (!Array.isArray(operations)) {
      throw new Error("operations must be a array")
    }
    if (!Array.isArray(options)) {
      throw new Error("options must be a array")
    }
    if (typeof (answer) != "string") {
      throw new Error("answer must be a string")
    }
  }
}