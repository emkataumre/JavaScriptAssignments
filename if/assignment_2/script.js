let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour <= 14) {
  textHolder.innerHTML = "School time";
} else if (hour > 14 && hour <= 17) {
  textHolder.innerHTML = "Cooking time";
} else if (hour > 17 && hour <= 19) {
  textHolder.innerHTML = "Study time";
} else if (hour > 19 && hour <= 21) {
  textHolder.innerHTML = "Gaming time";
} else if (hour > 22 && hour <= 23) {
  textHolder.innerHTML = "Shower time";
} else if (hour > 23) {
  textHolder.innerHTML = "Sleeping time";
}
