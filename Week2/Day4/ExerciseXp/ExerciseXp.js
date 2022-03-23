// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe() {
  let myName = "Bar";
  let myAge = 26;
  console.log(`My name is ${myName}, I am ${myAge} year old`);
}
infoAboutMe();

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `My name is ${personName}, I am ${personAge} year old, and my favorite color is ${personFavoriteColor}`
  );
}
infoAboutPerson("Bar", 26, "Blue");
infoAboutPerson("David", 45, "Blue");
infoAboutPerson("Josh", 26, "Yellow");

// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

// function calculateTip() {
//   let tip = 0;
//   let billPrice = Number(prompt("What is the bill?"));
//   if (billPrice <= 50) {
//     tip = billPrice * 0.2;
//     console.log(tip, billPrice + tip);
//   } else if (billPrice > 50 && billPrice <= 200) {
//     tip = billPrice * 0.15;
//     console.log(tip, billPrice + tip);
//   } else {
//     tip = billPrice * 0.1;
//     console.log(tip, billPrice + tip);
//   }
// }

// calculateTip();

// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46
let sum = 0;
function isDivisible(divisor) {
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(sum);
}
isDivisible(300);

// Exercise 4 : Shopping List

let stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

let prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (x of shoppingList) {
    if (stock[x] > 0) {
      stock[x] = stock[x] - 1;
      total += prices[x];
    }
  }
  console.log(total, stock);
}
myBill();

// Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange) {
  let wallet = 0;
  let coins = [0.25, 0.1, 0.05, 0.01];
  for (let i = 0; i < amountOfChange.length; i++) {
    wallet += Number(amountOfChange[i] * Number(coins[i]));
  }
  if (wallet >= itemPrice) {
    return true;
  }
  return false;
}

let c = changeEnough(4.25, [25, 20, 5, 0]);
console.log(c);

// Exercise 6 : Vacations Costs
function hotelCost(price) {
  let night = 0;
  do {
    night = Number(prompt("How many night would you like to stay?"));
  } while (isNaN(night) || night == "");
  return price * night;
}
let tot = hotelCost(140);
console.log(tot);

function planeRideCost() {
  let destination = prompt("What is your destination?");

  while (
    typeof destination != "string" ||
    destination == "" ||
    !isNaN(destination)
  ) {
    destination = prompt("What is your destination?");
  }
  if (destination === "London") {
    console.log(`183`);
    return destination;
  } else if (destination === "Paris") {
    console.log(` 220`);
    return destination;
  } else if (destination != "") {
    console.log(`300`);
    return destination;
  }
}
planeRideCost();

function rentalCarCost() {
  let rent = 0;
  let days = 0;
  do {
    rent = Number(prompt("How many days would you like to rent?"));
  } while (isNaN(rent) || rent == "");
  if (rent <= 10) {
    days = 40;
  } else {
    days = 36;
  }
  return rent * days;
}
let finalP = rentalCarCost();
console.log(finalP);

function totalVacationCost(hotelCost, planeRideCost, rentalCarCost) {
  totalCost = hotelCost + planeRideCost + rentalCarCost;
  return totalCost;
}
let sumAll = totalVacationCost(tot, planeRideCost(), finalP);
console.log(sumAll);
