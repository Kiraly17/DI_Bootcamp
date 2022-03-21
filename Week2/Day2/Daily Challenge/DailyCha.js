let sen = "The movie is not that bad I like it";

let wordNot = sen.indexOf("not");
let wordBad = sen.indexOf("bad");

console.log(wordNot, wordBad);

let sen1 = sen.substring(0, wordNot);
console.log(sen1);
let sen2 = sen.substring(wordBad + 3, sen.length);
console.log(sen2);
console.log(sen1 + "good" + sen2);

if (wordBad > wordNot) {
  console.log(sen1 + "good" + sen2);
} else {
  console.log(sen);
}
