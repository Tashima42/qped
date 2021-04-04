export default function linearSearch(arr, findElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == findElement) return i
  }
}