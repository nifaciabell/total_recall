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
let firstVariable = "Hello World";
firstVariable = 9;
let secondVariable = firstVariable;
secondVariable = "Hello";
console.log(firstVariable);
console.log(secondVariable);

let yourName = "Faye Bell";
console.log(`Hello, my name is ${yourName}`);

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Kevin' === 'Kevin');

// // FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b && c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The Farm

let animal = 'cow';
animal = 'cat';
if(animal === 'cow'){
  console.log('Moooo')
} else {
  console.log('Meow')
}
console.log(animal);

// E. Driver's Ed

const myAge = 5
if (myAge > 16){
  console.log(`Here are the keys!`)
} else {
  console.log(`Sorry, you're too young.`)
}
//_____________________________________________________________

// II. Loops

// A. The Basics

for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 10; i <= 400; i++) {
  console.log(i);
}

for (let i = 12; i < 4000; i+=3){
  console.log(i);
}

// B. Get even

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(i);
  }
}

// C. Give me Five

for(let i = 0; i <= 100; i++){
if (i % 5 === 0) {
  console.log(`I found a ${i}. High five!`)
} else {
  (i % 3 === 0)
    console.log(`I found a ${i}. Three is a crowd`)

}
}

// D. Savings account

function bankAccount(arguments){
  let sum = 0
  for (let i = 0; i < arguments.length; i++){
    sum = sum + arguments[i];
  }
  return sum;
};
console.log(bankAccount([1,2,3,4,5,6,7,8, 9, 10]) * 2);

let payBalance = 0;
for (let i = 1; i <= 100; i++) {
  payBalance += i;
}
console.log('the sum of all numbers from 1-100 doubled by 2 is ' + payBalance * 2);

//_____________________________________________________________

// III. Arrays & Control Flow
// A. Talk about it:
// 1. Elements
// 2. The elements of an array can be arranged in order by using a static sort() method of the Arrays class. But no they are not ordered.
// 3. Any user account information. ex: social media, bank account,

// B. Easy Does It

 const quotes = ['Life is good', 'No pain no gain', 'All that is well ends well'];
 console.log(quotes)

// C. Accessing elements
//
const randomThings = [1, 10, "Hello", true];
let randomThing = randomThings[0];
console.log(randomThing);

// D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
let ourClasses = ourClass[3]
ourClass[4] = "Octocat"
ourClass.push = "Cloud City"
console.log(ourClass[3])
console.log(ourClass)

// E. Mix It Up

const myArray = [5, 10, 500, 20]
// myArray.push = [ "Aegon", "Pokemon"]
const remove5 = myArray.shift([0])
// myArray.unshift = "Bob Marley"
console.log(myArray.push("Aegon", "Pokemon"))
console.log(myArray.unshift('Bob Marley'))
console.log(myArray.pop('Pokemon'))
console.log(Array.prototype.reverse())
console.log(myArray);


// F. Biggie Smalls

let number = 45
if (number < 100){
	console.log(`little number`)
} else {
	console.log(`big number`)
}

// G. Monkey in the Middle

let numbers = 7
if (numbers < 5){
	console.log(`little number`)
} if(numbers > 10) {
	console.log(`big number`)
} else {
	console.log(`monkey`)
}

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

// // Thom's closet is more complicated. Check out this nested data structure!!

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

console.log(`Kristyn is rocking that ${kristynsCloset[3]} today!`)
kristynsCloset.splice(5, 0 , 'raybans')
kristynsCloset.splice(6, 1, 'stained knit hat')
console.log(kristynsCloset)

thomsCloset.splice([2],[2],'Footie Pajamas')
console.log(thomsCloset)
console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}  ${thomsCloset[1][1]} and ${thomsCloset[2][0]}!`)


//_____________________________________________________________

// IV. Functions
// A.
function printGreeting(name) {
  console.log("Hello there, " + name + "!");
}

printGreeting("Slimer");

// B. Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
	  console.log(name + " is cool" + "!");
	}

	printCool("Captain Reynolds");

// C. Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(number){
	return 5 * 5 * 5
}
console.log(calculateCube(5));

// D. Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

function isVowel(argument){

	const arguments = argument.toLowerCase();

    const vowels = (['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i <  vowels.length; i++){
        if (argument !== vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

console.log(isVowel)

// E. Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(arr){
	let twoLengthArray = []
	for (let i = 0; i < arr.length; i++){
		twoLengthArray.push(arr[i].length)
	}
	return twoLengthArray
}

console.log(getTwoLengths(['Hank', 'Hippopopalous']));

// F. Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(arr) {
  let lengthsArray = [];
  for (let i = 0; i < arr.length; i++) {
    lengthsArray.push(arr[i].length);
  }
  return lengthsArray;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G.
function maxOfThree(...numbers) {
  let maxNumber = numbers[0];
  numbers.forEach((number) => {
    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
}

console.log(maxOfThree(6, 9, 1));

// H.
function printLongestWord(array){
	let longestWord = ''
	array.forEach((string) => {
		if(string.length > longestWord.length) {
			longestWord = string
		}
	});
	return longestWord;
}

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

// _____________________________________________________________;

// V. Objects

// A.
const user  = {
name:'Bobby',
email:  'bobbyjackson@gmail.com',
age: 32,
purchased: [],
}
user.email = 'bobbyjackson123@yahoo.com';
// B.
user.age++;
// C.
user.location = 'Montana'
// D.
user.purchased.push("carbohydrates","peace of mind", "Merino jodhpurs")
console.log(user)
console.log(user.purchased[2])

// E.
user.friend = {
	name: "Grace Hopper",
	age: 25,
	location: 'New Jersey',
	purchased: []
}

user.friend.age = 52
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")

console.log(user.friend)
console.log(user.friend.name)
console.log(user.friend.location)
console.log(user.friend.age)
console.log(user.friend.purchased[1])

// F.
for(let i = 0; i < user.purchased.length;i++){
	console.log(user.purchased)
}
for (let i = 0; i < user.friend.purchased.length; i++){
	console.log(user.friend.purchased)
}

// G.
function updateUser(){
	user.age++
	user.name.toUpperCase()
}

function oldAndLoud(person){
	person.age++
	person.name = person.name.toUpperCase
}

oldAndLoud(user)
console.log(user)
