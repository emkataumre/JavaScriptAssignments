"use strict";
//yes
//assignemnt 1
/*
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;

1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/

let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
numOfDaysUntilWeekend = -1;
console.log(numOfDaysUntilWeekend);

//assignemnt 2
//Addition to numbers
numOfDaysUntilWeekend += 5;
console.log(numOfDaysUntilWeekend);

//assignemnt 3
//Subtraction to numbers
numOfDaysUntilWeekend -= 2;
console.log(numOfDaysUntilWeekend);

//assignemnt 4
//write two sentences in two variables and connect them together

let greeting = "hello";
let farewell = "bye";

let combo = greeting + " " + farewell;
console.log(combo);

//assignemnt 5
//write two variables, one number and one string. add them together

let numbVar = 5;
let stringVar = "let's goo";

let combo2 = numbVar + stringVar;
console.log(combo2);

// assignemnt 6
// write the answears in the in a comment
// let r = 15;
// let s = 5;
// let t = r + s;
// 20;
// let u = r - s;
// 10;
// let v = t / u;
// 2;
// let x = r * v;
// 30;
// let y = s % v;
// 1;

//assignemnt 7
//Why does it not write out?
let r = 34;
let c = 28;
let x = r - 32 + c; //3
let y = r++ * 4; //140
if (x == 30 || y == 2) {
  console.log("yeah you got it");
}
// change a number in a variable, so it print out the text

//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt,
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt

let numVar = 18;
let promptVar = prompt("Please enter your age", numVar);
console.log(promptVar);

// assignment 9
// write these numbers in the console and write the output. Explain you thing this happens
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(3 - 1);
console.log(3 + 1);
console.log("3" - 1); //converts string into num bcs you cant uncancatonate strings
console.log("3" + 1); // converts num into string and concatonates the two strings
console.log("222" - -"111"); // the - makes them nubmers but the other - turns the eqasion into an addition instead of a subrtaction and therefore the 2 numbers are added together

//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year

let year = prompt("Enter year", "");

if (year % 4 == 0) {
  console.log("Its a leap year");
} else {
  console.log("Not a leap year");
}
