// Exercise #1
// Create an object to hold information on your favorite recipe.
//It should have properties for *title* (a string), *servings*(a number)
// and *ingredients*(an array of strings)
// On separate lines (one console.log statement for each), log the 
//recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let Mole = {
  Title: "Mole",
  Servings: 2,
  Ingrediants: ['Cinnamon', 'Cumin', 'Cocoa',]
}


//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa

let books = [{
  Title: "Flowers in the Attic",
  Author: "V.C. Andrews",
  alreadyRead: true,
}, {
  Title: "War and Peace",
  Author: "Leo Tolstoy",
  alreadyRead: false,
}];

for(let i = 0; i < books.length; i++) {
  if (books[i].alreadyRead) {
    console.log('You already read ' + books[i].Title)
  }else{
    console.log('I have not read ' + books[i].Title)
  }
}

//Exercise #3
//Create your object representing your favorite movie, like so
// const shawshank = {
//   title: 'Shawshank Redemption',
//   director: 'Frank Darabont',
//   actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//   releaseYear: 1994, 
//   duration: 142
// }
// After you have crreated your movie object, print the title 
// of your movie using dot notation
// Print the director's name
// Print the release year
// Maybe your favorite came with an extended cut, including deleted scenes. 
// Write a statement that increases your movie object's duration by 30 minutes. 

const movie = {
  title: 'Face Off',
  director: 'John Woo',
  actors: ['John Travolta', 'Nicolas Cage', 'Gina Gershon'],
  releaseYear: 1997,
  duration: 139,
  increaseDuration:function() {
    this.duration += 30;
  }
}

console.log('This movie is' + this.title);
console.log('The directors name is' + this.director);
console.log('This movie was released in' + this.releaseYear); 
movie.increaseDuration();
console.log(movie.duration);


//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];
Array.isArray(arrayList); 

//console.log('are you an array? ' + Array.isArray(books));
//Array.isArray() will check if an obj is an array or not.


//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

function countCharacter(str){
  let countCharObj = {}
  for(let i = 0; i < str.length; i++) {
      if(countCharObj[str.charAt(i)]) {
          countCharObj[str.charAt(i)]++
      } else {
          countCharObj[str.charAt(i)] = 1
      }
  }
  return countCharObj;
}

/*function countCharacter(str) {  //use a string with the variable countCharacter

    let countCharObj = {}  //countCharObj is a new variable; going to be empty

    for(let i = 0; i < str.length; i++) {  //let countCharObj start at the first obj; it has to be less than the length of the i; and your going to add one “over”

if(countCharObj[str.charAt(i)]) {  //The charAt() method returns the character at the specified index in a string. The index of the first character is 0, the second character is 1, and so on. If the string exists, we're going to add one "over" as you mentioned earlier to the string

            countCharObj[str.charAt(i)]++  //and it is going to keep adding on until it reaches the end of the string Here is where the adding is going to happen

        } else { // If this character is not in the object list, we're going to create a new key in the object, and add "1" to it.

            countCharObj[str.charAt(i)] = 1  //  Here is where we're adding the one to start off. 

        }

    }

    return countCharObj; */



//Exercise #6
// Write a function that accepts two objects
// as arguments and 
// *extends* all of the key/value pairs of the second one to the first one
// function extend(obj1, obj2) {
  
// }
// extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}

let object1 = {
  a: 1,
  b: 2,
  c: 3,
};
let object2 = {
  c: 4,
  d: 5,
  e: 6,
};
function extend(obj1, obj2) {
  for(let key in obj2)
      if(obj2.hasOwnProperty(key))
          obj1[key] = obj2[key];
  return obj1;
}

console.log(extend(object1,object2));
