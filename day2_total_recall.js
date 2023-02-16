////////////////////////////////
//* Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
//* Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

////////////////////////////////
//* Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 3) {
    console.log(`Fizz`);
  } else if (i % 5) {
    console.log(`Buzz`);
  }
  if (i % 3 && 5) {
    console.log(`FizzBuzz`);
  }
}

////////////////////////////////
//* Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

wolfy[2] = 17;
console.log(wolfy[2]);
wolfy.splice(3, 0, "Gotham City");
console.log(wolfy[3]);
dart.push("Hawkins");
console.log(dart);
wolfy[0] = "Gameboy";
console.log(wolfy);

////////////////////////////////
//* Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = [`Donatello, Leonardo, Raphael, Michaelangelo`];
for (const element of ninjaTurtles) {
  console.log(element.toUpperCase());
}

////////////////////////////////
//* Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies[8]);
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
const reversed = favMovies.reverse();
favMovies.shift();
favMovies.unshift("UP");
favMovies.splice(3, 0, "Avatar");

const newFavMovies = favMovies.slice(0-10)
console.log(newFavMovies);
 
console.log(favMovies);
console.log(favMovies[19]);

// let movie = 'Avatar'
// let elementLocation = favMovies.find(item => {
//   if (movie === item)
//   return true;
// })
// console.log(movie)

// let index = favMovies.findIndex(
//   item => item.toLocaleLowerCase().indexOf('A') > -1
// )
// console.log(`${index}`)



////////////////////////////////
//* Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

                    
whereIsWaldo.splice(1,1)
whereIsWaldo[1][2] = "No One"
               
console.log(whereIsWaldo[2][1][1]);
console.log(whereIsWaldo)
////////////////////////////////
//*  Excited Kitten
////////////////////////////////

////////////////////////////////
//*  Find the Median
////////////////////////////////
