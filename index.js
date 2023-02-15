// Example of What your JS File in VS Code should look like

/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/

// I. Variables & Data Types
// A. Q + A
// 1. const favoriteFruit = 'strawberries' or let favoriteFruit = 'mangos or const favoriteFruit = 'banana'
// 2. Just reference the variable inside the function and update the value or you can override the variable and change the value.
// 3. By using the assignment operator.
// EX : const myFavoriteFruit
// myFavoriteFruit = 'apple'
// const yourFavoriteFruit = myFavoriteFruit;
// 4. Declare means creating a variable w/o a value, Assign giving the variable a value, Define means to declare and assign
// 5. Pseudocode is useful to describe how an algorithm should work, to explain a computing process to less technical users and to design code in a group setting.
// 6. 60% of the time should be spent thinking about the code and its logic and execution and that will allow the coding to be easier.

// B. Strings
// let firstVariable = "Hello World";
// firstVariable = 9;
// let secondVariable = firstVariable;
// secondVariable = "Hello";
// console.log(firstVariable);
// console.log(secondVariable);

// let yourName = "Faye Bell";
// console.log(`Hello, my name is ${yourName}`);

// C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Kevin' === 'Kevin');

// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a < b && c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// D. The Farm

// let animal = 'cow';
// animal = 'cat';
// if(animal === 'cow'){
//   console.log('Moooo')
// } else {
//   console.log('Meow')
// }
// console.log(animal);


// E. Driver's Ed

// const myAge = 5
// if (myAge > 16){
//   console.log(`Here are the keys!`)
// } else {
//   console.log(`Sorry, you're too young.`)
// }
//_____________________________________________________________

// II. Loops

// A. The Basics
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// for (let i = 12; i < 4000; i+=3){
//   console.log(i);
// }

// B. Get even

// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is an even number`);
//   } else {
//     console.log(i);
//   }
// }


// C. Give me Five

// for(let i = 0; i <= 100; i++){
// if (i % 5 === 0) {
//   console.log(`I found a ${i}. High five!`)
// } else {
//   (i % 3 === 0) 
//     console.log(`I found a ${i}. Three is a crowd`)
  
// }
// }


// D. Savings account

// function bankAccount(arguments){
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++){
//     sum = sum + arguments[i];
//   }
//   return sum;
// };
// console.log(bankAccount([1,2,3,4,5,6,7,8, 9, 10]) * 2);

// let payBalance = 0;
// for (let i = 1; i <= 100; i++) {
//   payBalance += i;
// }
// console.log('the sum of all numbers from 1-100 doubled by 2 is ' + payBalance * 2);


//_____________________________________________________________

// III. Arrays & Control Flow
// A. Talk about it: 
// 1. Elements
// 2. The elements of an array can be arranged in order by using a static sort() method of the Arrays class. But no they are not ordered.
// 3. Any user account information. ex: social media, bank account, 

// B. Easy Does It

//  const quotes = ['Life is good', 'No pain no gain', 'All that is well ends well'];
//  console.log(quotes)
 
// C. Accessing elements
// 
// const randomThings = [1, 10, "Hello", true];
// let randomThing = randomThings[0];
// console.log(randomThing);


// D. Change values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// let ourClasses = ourClass[3]
// ourClass[4] = "Octocat"
// ourClass.push = "Cloud City"
// console.log(ourClass[3])
// console.log(ourClass)


// E. Mix It Up

// const myArray = [5, 10, 500, 20]
// // myArray.push = [ "Aegon", "Pokemon"]
// const remove5 = myArray.shift([0])
// // myArray.unshift = "Bob Marley"
// console.log(myArray.push("Aegon", "Pokemon"))
// console.log(myArray.unshift('Bob Marley'))
// console.log(myArray.pop('Pokemon'))
// console.log(Array.prototype.reverse())
// console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// F. Biggie Smalls

// let number = 45
// if (number < 100){
// 	console.log(`little number`)
// } else {
// 	console.log(`big number`)
// }

// G. Monkey in the Middle

// let number = 7
// if (number < 5){
// 	console.log(`little number`)
// } if(number > 10) {
// 	console.log(`big number`)
// } else {
// 	console.log(`monkey`)
// }

// H. What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// console.log(`Kristyn is rocking that ${kristynsCloset.[3]} today!`)
//_____________________________________________________________

// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________

// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________
