import Function from "../../utils/abstractions/Function"
import Random from "../../utils/random"
const random = new Random()
import linearSearch from "../../utils/algorithms/LinearSearch"

export class LinearSearchFunction extends Function {
  constructor() {
    super() // REQUIRED
    // PRIVATE
    this._numberOfElements = random.integer(5, 10)
    this._arr = random.array(this._numberOfElements, 1, 100)
    this._findElement = this._arr[random.integer(1, this._numberOfElements) - 1]
    this._findIndex = linearSearch(this._arr, this._findElement)

    // PUBLIC
    this.title = "Insira a saida da funcao"
    this.source = [
      "#include <stdio.h>",
      "int linear_search(int arr_length, int find_element) {",
      "for(int i = 0; i <  arr_length; i++) {",
      "if(arr[i] == find_element) {",
      "return i;",
      "} } }",
      "int main()",
      "{",
      `int arr_length = ${this._numberOfElements}`,
      `int arr[arr_length] = {${this._arr.toString()}};`,
      `printf("%d", linear_search(arr, arr_length, ${this._findElement}));`,
      "return 0;",
      "}",
    ];
    this.answer = this._findIndex.toString()

    this.test(
      this.type,
      this.source,
      this.answer
    )
  }
}
