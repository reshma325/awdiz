// Define an array of fruits
const fruits = ["apple", "banana", "cherry", "date"];
// Use forEach() to iterate through the array and print each fruit
console.log("Using forEach():");
fruits.forEach((fruit) => {
  console.log(fruit);
});
// Use map() to create a new array with the fruits capitalized
const capitalizedFruits = fruits.map((fruit) => {
  return fruit.charAt(0).toUpperCase() + fruit.slice(1);
});
console.log("\nUsing map():", capitalizedFruits);
// Use push() to add a new fruit to the end of the array
fruits.push("fig");
console.log("\nUsing push() to add 'fig' to the end:", fruits);
// Use pop() to remove the last fruit from the array
const poppedFruit = fruits.pop();
console.log("\nUsing pop() to remove the last fruit:", fruits);
console.log("Popped fruit:", poppedFruit);
//Use shift() to remove the first element from the array and return that element
let removefruits = fruits.shift();
console.log(removefruits);
console.log(fruits);
//use unshift() to add one or many elements at the beginning of the array and return the new length
let newlength = fruits.unshift('apple','kiwi');
console.log(newlength);
console.log(fruits);


//reduce


let numbers= [1,2,3,4,5];

let sum= numbers.reduce(function(accumulator,currentvalue){
  return accumulator+currentvalue;

},0);
console.log(sum);

