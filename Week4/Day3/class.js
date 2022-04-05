// const res = [20, 15.2, 10];
// const taxes = 1.17;
// let priceIncludes = [];
// function multiplyPrices() {
//   for (let price of res) {
//     let newPrice = price * taxes;
//     priceIncludes.push(newPrice);
//   }
//   console.log(priceIncludes);
// }
// multiplyPrices();

// const res = [20, 15.2, 10];
// const taxes = 1.17;

// let newPriceArray = res.map(function (element, index, array) {
//   return element * taxes;
// });
// console.log(newPriceArray);

// let famousPeople = [
//   {
//     name: "Angelina Jolie",
//     job: "actor",
//     age: 80,
//   },
//   {
//     name: "Georges Clooney",
//     job: "actor",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     job: "actor",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     job: "singer",
//     age: 16,
//   },
//   {
//     name: "Britney Spears",
//     job: "singer",
//     age: 100,
//   },
// ];

// let actorNames = famousPeople.map((element) => element["name"]);

// console.log(actorNames);

// let actorJobName = famousPeople.map((element) => ({
//   name: element["name"],
//   job: element["job"],
// }));

// console.log(actorJobName);

// const numbers = [2, 3, 4, 5, 6];

// // const newEevenArray = [];

// // function addToArray() {
// //   for (let num of numbers) {
// //     if (num % 2 === 0) {
// //       newEevenArray.push(num);
// //     } else {
// //       continue;
// //     }
// //   }
// // }
// // addToArray();
// // console.log(newEevenArray);

// const newArrayOfNumbers = numbers.filter(function (element) {
//   return element % 2 === 0;
// });
// console.log(newArrayOfNumbers);

// let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

// const PositiveNumbers = numbers.filter(function (element) {
//   return element >= 0;
// });
// console.log(PositiveNumbers);

// const characters = [
//   { name: "James T. Kirk", series: ["Star Trek"] },
//   { name: "Spock", series: ["Star Trek", "Star Trek: The Next Generation"] },
//   { name: "Jean-Luc Picard", series: ["Star Trek: The Next Generation"] },
//   {
//     name: "Worf",
//     series: ["Star Trek: The Next Generation", "Star Trek: Deep Space Nine"],
//   },
// ];

// const appeared = characters.filter((element) =>
//   element["series"].includes("Star Trek: The Next Generation")
// );
// console.log(appeared);

// const students = [
//   { name: "Rich", score: 33 },
//   { name: "Peter", score: 55 },
//   { name: "John", score: 75 },
// ];

// let sumScore = students.reduce(function (acc, element) {
//   return accumulator + element["score"], 0;
// });
// console.log(sum);

let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Bob", age: 30, voted: true },
];

let arrayOfVoters = voters.filter((element) => element["voted"] === true);
console.log(arrayOfVoters);

// let numOfPeople = arrayOfVoters.length;
// console.log(numOfPeople);

let numPeopleVoted = voters.reduce((acc, element) => {
  return acc + element["voted"];
}, 0);

console.log(numPeopleVoted);

const students = [
  { name: "Rich", score: 33 },
  { name: "Peter", score: 55 },
  { name: "John", score: 75 },
];

// // Find the sum of the score of the students using reduce

// let sumScore = students.reduce(function (acc, element) {
// 	return acc + element["score"]
// },0)

let sumScore = students.reduce((acc, element) => acc + element["score"], 0);
console.log(sumScore);

// //BEHIND THE SCENE
// 1st loop
// accumulator = 0
// element =  -> {name: 'Rich', score: 33}
// element["score"] = 33
// return acc + element["score"] -> 0 + 33

// 1st loop
// accumulator = 33
// element =  -> {name: 'Peter', score: 55},
// element["score"] = 55
// return acc + element["score"] -> 33 + 55

// result - 3
let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Bob", age: 30, voted: true },
];

//create a new array - containing only the voters who voted
// -> property voted to be true

let arrayOfVoters = voters.filter((element) => element["voted"]);
console.log(arrayOfVoters);
// (3) [{…}, {…}, {…}]
// 0: {name: 'Bob', age: 30, voted: true}
// 1: {name: 'Jake', age: 32, voted: true}
// 2: {name: 'Bob', age: 30, voted: true}

// THE SAME
// let arrayOfVoters = voters.filter(element => element["voted"]===true);
// console.log(arrayOfVoters)

let numOfPeople = arrayOfVoters.length;
console.log(numOfPeople); //3

let numPeopleWhoVotedCheck = voters.reduce((acc, element) => {
  if (element["voted"]) {
    return ++acc;
  } else {
    return acc;
  }
}, 0);

console.log(numPeopleWhoVotedCheck); //3

// because true is 1 and false is 0
let numPeopleWhoVoted = voters.reduce((acc, element) => {
  return acc + element["voted"];
}, 0);

console.log(numPeopleWhoVoted); //3

//CHAINING METHODS
let wizards = [
  {
    name: "Harry Potter",
    house: "Gryfindor",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    name: "Tonks",
    house: "Hufflepuff",
  },
  {
    name: "Ronald Weasley",
    house: "Gryfindor",
  },
  {
    name: "Hermione Granger",
    house: "Gryfindor",
  },
];

//Push in a array the names of all the people living in gryfindor

// find the ppl living in Gryfindor
// pushed inside the array
let wizardGryfindor = wizards.filter(
  (element) => element["house"] === "Gryfindor"
);
console.log(wizardGryfindor);
// (3) [{…}, {…}, {…}]
// 0: {name: 'Harry Potter', house: 'Gryfindor'}
// 1: {name: 'Ronald Weasley', house: 'Gryfindor'}
// 2: {name: 'Hermione Granger', house: 'Gryfindor'}

let namesWizardGryfindor = wizardGryfindor.map((element) => element["name"]);
console.log(namesWizardGryfindor);
// ['Harry Potter', 'Ronald Weasley', 'Hermione Granger']

//CHAINING
let names = wizards
  .filter((element) => element["house"] === "Gryfindor")
  .map((element) => element["name"]);

console.log(names); //['Harry Potter', 'Ronald Weasley', 'Hermione Granger']

// Chain other methods
// let names =  wizards
// 			.filter(element => element["house"] === "Gryfindor")
// 			.map(element => element["name"])
// 			.join("-")
// 			.length
