
// Hello World Program


console.log("Hello, World!");


// - This line prints "Hello, World!" to the console.


// Poorly structured code:

var x=5;y=10;if(x>y){console.log("x is greater")}else{console.log("y is greater")}



// "use strict" Directive

// The "use strict" directive helps prevent errors by:

// The purpose of " use strict  " is indicate that the code should be executed in strict mode.
 // Declaring strict mode :

 //example:
 "use strict";
 myFunction()
 function myFunction() {
 y = 3.14;   // This will cause an error (y is not defined)
 }

// Variable Declarations


let name = "Ariba"; // string
let age = 20; // number
let isAdmin = true; // boolean

f_name = "Areeba";
age = 21;
isAdmin = false;

// console.log(f_name, age, isAdmin);

// Type Conversions


console.log(String(true)); // "true"
console.log(Number("123")); // 123
console.log(Boolean(0)); // false
console.log(String(null)); // "null";


// Simple Calculator Function


function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}

// console.log(calculator(5, 10, "+"));
