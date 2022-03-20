// Ex 1

const favFood = "Pizza";
const favMeal = "Dinner";
console.log(`I eat ${favFood} at every ${favMeal}`);

// Ex2
// PART I

let myWatchedSeriesLength = "3";

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(`I watched ${myWatchedSeriesLength} series:${myWatchedSeries}`);

// PART II

myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

myWatchedSeries.push("Vikings");
console.log(myWatchedSeries);

myWatchedSeries.unshift("Breaking Bad");
console.log(myWatchedSeries);

myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);

console.log(myWatchedSeries[1][2]);

// Ex 3

let celsius = 30;
let fahrenheit = (celsius / 5) * 9 + 32;
console.log(fahrenheit);

// Exercise 4

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 34+21 = 55
// Actual:55

a = 2;

console.log(a + b); //second expression
// Prediction:23 because now its 21 + 2
// Actual:23
//c is undefined;
console.log(3 + 4 + "5");
//75 because 3+4 are number so its 7 combined, but adding it a string will just add it to a string without calculating.

// Exercise 5

typeof 15;
// Prediction: number
// Actual:number

typeof 5.5;
// Prediction:number
// Actual:number

typeof NaN;
// Prediction:NaN
// Actual:number

typeof "hello";
// Prediction:String
// Actual:string

typeof true;
// Prediction:Boolean
// Actual:boolean

typeof (1 != 2);
// Prediction:String
// Actual:boolean

"hamburger" + "s";
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s";
// Prediction:hamburger
// Actual:NaN

"1" + "3";
// Prediction:13
// Actual:13

"1" - "3";
// Prediction:-2
// Actual:-2

"johnny" + 5;
// Prediction:NaN
// Actual:johnny5

"johnny" - 5;
// Prediction:NaN
// Actual:NaN

99 * "hello";
// Prediction:undefined
// Actual:NaN

1 != 1;
// Prediction:Boolean
// Actual:false

1 == "1";
// Prediction:Boolean
// Actual:true

1 === "1";
// Prediction: Boolean
// Actual:false

// Exercise 6

5 + "34";
// Prediction:534
// Actual:534

5 - "4";
// Prediction:Undefined
// Actual:1

10 % 5;
// Prediction:Undefined
// Actual:0

5 % 10;
// Prediction:Undefined
// Actual:5

"Java" + "Script";
// Prediction:JavaScript
// Actual:JavaScript

" " + " ";
// Prediction:" "
// Actual:' '

" " + 0;
// Prediction:" " 0
// Actual:' 0'

true + true;
// Prediction: True
// Actual:2

true + false;
// Prediction:true
// Actual:1

false + true;
// Prediction:1
// Actual:1

false - true;
// Prediction:0
// Actual:-1

!true;
// Prediction:false
// Actual:false

3 - 4;
// Prediction: -1
// Actual:-1

"Bob" - "bill";
// Prediction:NaN
// Actual:NaN
