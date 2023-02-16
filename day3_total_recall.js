// Creating Classes & Factories

// Hamster
class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

// Person
class Person {
  constructor(name) {
    this.name = "";
    this.age = this.height = this.weight = this.mood = this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`I am ${this.name} hello`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// Create a Story with your Person class

const timmy = new Person('Timmy')

for (let i = 0; i < 5; i++){
  timmy.ageUp()
}

for (let i = 0; i < 5; i++){
  timmy.eat()
}

for (let i = 0; i < 5; i++){
  timmy.exercise()
}

for(let i = 0; i < 9; i++){
  timmy.ageUp()
}

const hamster = new Hamster('Gus')
hamster.owner = 'Timmy'
timmy.buyHamster()

for (let i = 0; i < 15; i++){
  timmy.ageUp()
}

timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()

class Dinner {
  constructor(app, entree, dessert) {
    this.app = app;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  cooking([app, entree, dessert]) {
    return new Dinner(app, entree, dessert);
  }
}

let chef1 = new Chef();
let firstDinner = chef1.cooking("cheese", "steak", "lollipop");
let secondDinner = chef1.cooking("pizza", "pasta", "cake");
let thirdDinner = chef1.cooking('bread', 'chicken','cookies')

console.log(firstDinner);
console.log(secondDinner);
console.log(thirdDinner);




