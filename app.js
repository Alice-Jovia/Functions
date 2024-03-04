// FUNCTION

function greetPerson(name) {
  console.log(`Hello ${name}`);
}

///Call the function
// const name = prompt("Enter name? ");
greetPerson("JB");

//Using the Return keyword

function add(a, b) {
  const sum = a + b;
  return sum;
}
const summation = add(2, 3);

function calArea(l, w) {
  const area = l * w;
  return area;
}
const area = calArea(2, 3);

console.log(area);

// const username = prompt("Please enter your username");

//Validate the username

// function validateUsername(username) {
//   if (username.length < 3) {
//     return false;
//   } else {
//     return true;
//   }
// }
// if (validateUsername(username)) {
//   const password = prompt("Please enter your password");
// } else {
//   alert("Username must atleast 3 charaters");
// }

//Enter your password

//validate the password

//Tell the user his credentials

//DEFAULT Values

function calcAreaOfCircle(r = 2) {
  return 3.14 * r ** 2;
}

const a = calcAreaOfCircle();
console.log(a);

function requestMeal(foodType, drink = "water") {
  console.log(`Your Meal is ${foodType} with ${drink}`);
}
requestMeal("Chips and Chicken");
