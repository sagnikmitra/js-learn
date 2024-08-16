// Log "Sagnik" to the console
console.log("Sagnik"); // Output: Sagnik

// Data Types in JavaScript: undefined, null, boolean, string, symbol, number, and object

// 'var' declares a variable globally or locally to an entire function, optionally initializing it to a value
var myName = "Sagnik"; // Variable that can be reassigned throughout the program
myName = 8; // Reassigning 'myName' to a number

// 'let' declares a block-scoped local variable, optionally initializing it to a value
let ourName = "Hack4Bengal"; // Block-scoped variable

// 'const' declares a block-scoped variable, with a constant value
const pi = 3.14; // Constant variable that cannot be reassigned

// Using double quotes inside single quotes
var myStr = 'I am a "Double Quoted String"';
console.log(myStr); // Output: I am a "Double Quoted String"

// Using single quotes inside double quotes
var myStr = `'I am a "Double Quoted String"'`;
console.log(myStr); // Output: 'I am a "Double Quoted String"'

// Get the length of the string
console.log(myStr.length); // Output: 27

// Get the length of the first character of the string (which is always 1)
console.log(myStr[0].length); // Output: undefined (as myStr[0] is a character, not a string)

// Get the last index of the string
console.log(myStr.length - 1); // Output: 26

// Access the last character of the string
console.log(myStr[myStr.length - 1]); // Output: "

// Define an object representing a dog
var ourDog = {
  name: "Licy", // Name of the dog
  legs: 4, // Number of legs
  tails: 1, // Number of tails
  friends: ["everything!"], // Friends of the dog
};

// Add a new property to the object
ourDog.bark = "Woof!";
console.log(ourDog);
// Output: { name: 'Licy', legs: 4, tails: 1, friends: [ 'everything!' ], bark: 'Woof!' }

// Delete the 'legs' property from the object
delete ourDog.legs;
console.log(ourDog);
// Output: { name: 'Licy', tails: 1, friends: [ 'everything!' ], bark: 'Woof!' }

// Function to check if a property exists in the object and return its value if it does
function checkObject(checkProperty) {
  return ourDog.hasOwnProperty(checkProperty)
    ? ourDog[checkProperty]
    : "Change Me!";
}

console.log(checkObject("tails")); // Output: 1
console.log(checkObject("tail")); // Output: Change Me!

// Function to concatenate two arrays/strings
var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myConcat("tails", "heads")); // Output: tailsheads

// Arrow function version of the concatenation function
var myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat2("tails", "heads")); // Output: tailsheads

// Array of real numbers
const realNumberAray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// Function to filter out positive integers and return their squares
const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0) // Filter positive integers
    .map((x) => x * x); // Square them
  return squaredIntegers;
};

const squareIntegers = squareList(realNumberAray);
console.log(squareIntegers); // Output: [ 16, 1764, 36 ]

// IIFE (Immediately Invoked Function Expression) to sum three numbers
const sum = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3)); // Output: 6

// Function using rest operator to sum any number of arguments
const sumRest = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sumRest(1, 2, 3)); // Output: 6
console.log(sumRest(1, 2, 3, 4)); // Output: 10

// Array of months
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = arr1; // arr2 refers to the same array as arr1
  arr1[0] = "Potato"; // Modifying arr1 also affects arr2
})();

console.log(arr2); // Output: [ 'Potato', 'FEB', 'MAR', 'APR', 'MAY' ]

// Using the spread operator to create a copy of the array
const arrSpread = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr3;
(function () {
  arr3 = [...arrSpread]; // arr3 is a copy of arrSpread
  arrSpread[1] = "Jumbo"; // Modifying arrSpread does not affect arr3
})();

console.log(arr3); // Output: [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]
