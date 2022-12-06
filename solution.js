// https://www.codewars.com/kata/59778cb1b061e877c50000cc/train/javascript

function arrAdder(arr) {
  if (arr.length === 0) return "";
  const words = [];
  for (let x = 0; x < arr[0].length; x++) {
    let word = "";
    for (let y = 0; y < arr.length; y++) {
      const c = arr[y][x];
      if (c !== "") word += c;
    }
    words.push(word);
  }
  return words.join(" ");
}
