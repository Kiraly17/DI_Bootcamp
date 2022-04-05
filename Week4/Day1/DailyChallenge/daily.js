const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//      ex1

let userNames = [];
gameInfo.forEach((user) => userNames.push(user["username"] + "!"));
console.log(userNames);

//      ex2

let winners = [];
gameInfo.forEach((user) =>
  user["score"] > 5 ? winners.push(user["username"]) : []
);
console.log(winners);

//      ex3

let sumScore = 0;
gameInfo.forEach((user) => (sumScore += user["score"]));

console.log(sumScore);
