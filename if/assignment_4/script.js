let textHolder = document.querySelector("#p");
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let num3 = prompt("Enter third number");

let sorted = [num1, num2, num3];
sorted.sort(function (a, b) {
  return a - b;
});

textHolder.innerHTML = sorted;
