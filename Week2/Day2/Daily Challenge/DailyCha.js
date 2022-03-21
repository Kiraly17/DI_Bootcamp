let sen = "The movie is not that bad I like it";

const arr = sen.split(" ");

let wordNot = arr.indexOf("not");
let wordBad = arr.indexOf("bad");
console.log(wordNot, wordBad);
arr.splice(wordNot, wordBad - wordNot + 1, "good");
console.log(arr);
console.log(arr.join(" "));
// let wordNot = sen.indexOf("not");
// let wordBad = sen.indexOf("bad");

// let sen1 = sen.substring(0, wordNot);
// let sen2 = sen.substring(wordBad + 4, sen.length);

// if (wordBad > wordNot) {
//   console.log(sen1 + "good" + sen2);
// } else {
//   console.log(sen);
// }
