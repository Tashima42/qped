export default class Function {
  type = "Function" // Same name as the component
  title // String
  source // Array<String>
  answer // String

  constructor() { }

  test(type, source, answer) {
    if (type != "Function") {
      throw new Error("type must be 'Function'")
    }
    if (!Array.isArray(source)) {
      throw new Error("source must be a array")
    }
    if (typeof (answer) != "string") {
      throw new Error("answer must be a string")
    }
  }
}