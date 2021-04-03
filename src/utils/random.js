import MersenneTwister from "mersenne-twister";
const generator = new MersenneTwister();

export default class Random {
  integer(min, max) {
    return Math.floor((generator.random() * max) + min);
  }

  shuffleArray(array) {
    let id = array.length;
    while (0 !== id) {
      const randomId = Math.floor(generator.random() * id);
      id -= 1;
      const tmp = array[id];
      array[id] = array[randomId];
      array[randomId] = tmp;
    }
    return array;
  }

  bool() {
    return this.integer(1, 2) - 1 == true;
  }
}
