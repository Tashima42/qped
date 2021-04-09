import Code from "../../utils/abstractions/Code"

export class StackCode extends Code {
  constructor() {
    super()
    this.title = "Complete as linhas"
    this.source = [
      "#include <stdio.h>",
      "int main()",
      "{",
      'printf("Hello World");',
      "return 0;",
      "}",
    ]
    this.output = ["Hello World"]
  }
}
