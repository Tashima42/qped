export const integer = (min, max) => {
  return Math.floor((Math.random() * max) + min);
}

export const shuffleArray = (array) => {
  let curId = array.length;
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}
