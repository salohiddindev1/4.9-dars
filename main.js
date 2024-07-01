let letterSearch = ["non", "asal", "banan", "olma", "aziza", "Gul", "mashina"];

let wordsWithN = [];
let wordsWithoutN = [];

for (let i = 0; i < letterSearch.length; i++) {
  let word = letterSearch[i];
  if (word.toLowerCase().includes("n")) {
    wordsWithN.push(word);
  } else {
    wordsWithoutN.push(word);
  }
}

console.log(" 'n' harfi ishtirok etgan soz:", wordsWithN);
console.log(" 'n' harfi ishtirok etmagan soz:", wordsWithoutN);
