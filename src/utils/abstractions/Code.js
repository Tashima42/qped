export default class Code {
  type = "Code" // Same name as the component
  title // String
  source // Array<String>
  output // Array<String>

  constructor() {
  }
  test(type, title, source, output) {
    if (type != "Code") {
      throw new Error("type must be 'Code'")
    }
    if (typeof (title) != "string") {
      throw new Error("title must be a string")
    }
    if (!Array.isArray(source)) {
      throw new Error("source must be a array")
    }
    if (!Array.isArray(output)) {
      throw new Error("output must be a array")
    }
  }
}