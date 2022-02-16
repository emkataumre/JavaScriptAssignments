let num1 = prompt("Please enter your first number :)", "");
let num2 = prompt("Please enter your second number :)", "");
let textHolder = document.querySelector("#p");

if (num1 > num2) {
  textHolder.innerHTML = num1 + " is the larger number!";
} else if (num1 < num2) {
  textHolder.innerHTML = num2 + " is the larger number!";
} else if ((num1 = num2)) {
  textHolder.innerHTML = "bro you entered the same numbers 🤨";
}
