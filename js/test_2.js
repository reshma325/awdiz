// Question: Pattern Printing
// Create a program that prints the following pattern using asterisks ($) using for loops:
// Input - 5 
// Output -
// $
// $$
// $$$
// $$$$
// var num= 5;

// function starPattern(num){
//     for(i=1;i<=num;i++){
//         let pattern='';
      
//         for(j=0;j<i;j++){
//             pattern=pattern + '*';
    
//         }
//         console.log(pattern);
    
//     }
// }starPattern(num);


// Palindrome Check
// Write a JavaScript function that checks if a given string is a palindrome (reads the same backward as forward). Return true if it's a palindrome; otherwise, return false.

// Example:

// Input: "racecar"
// Output: true



// function printSquarePattern(n) {
//     for (let i = 0; i < n; i++) {
//       let row = '';
//       for (let j = 0; j < n; j++) {
//         row += '* ';
//       }
//       console.log(row);
//     }
//   }
  
//   printSquarePattern(5);

  function printRightAngleTriangle(n) {
    for (let i = n; i >= 0; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  printRightAngleTriangle(5);
  

  











