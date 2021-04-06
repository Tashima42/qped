import Random from "../../random"
const random = new Random()
import linearSearch from "../../algorithms/LinearSearch"

const numberOfElements = random.integer(5, 10)
const arr = random.array(numberOfElements, 1, 100)
const findElement = arr[random.integer(1, numberOfElements) - 1]
const findIndex = linearSearch(arr, findElement)
const source = [
  "#include <stdio.h>",
  "int linear_search(int arr_length, int find_element) {",
  "for(int i = 0; i <  arr_length; i++) {",
  "if(arr[i] == find_element) {",
  "return i;",
  "} } }",
  "int main()",
  "{",
  `int arr_length = ${numberOfElements}`,
  `int arr[arr_length] = {${arr.toString()}};`,
  `printf("%d", linear_search(arr, arr_length, ${findElement}));`,
  "return 0;",
  "}",
];

const sourceCode = source
export default {
  sourceCode,
  findIndex
}
