// Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"

// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"

// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

// // Describe: userInput()
// Test: "It should return an array with a 0 if the number 0 is inputted"
// Expect: (userInput(0).toEqual([0]);

// What I need to do: Take in an integer, break it down so each digit is is one index of an array, loop through the array of integers to look for 1's, 2's, and 3's and then replace those with the correspionding strings.

// Need to use array.split method

function userInput(input) {
  let inputArray = []
  let outputArray = []
  let outputString = []

  let outputString = inputArray.split (" ");

}
// userInput(result);

// console.log("The number is = " + result)

// UI Logic
// $(document).ready(function() {
//   $("$formOne").submit(function(event) {
//     event.preventDefault()

//   });
// });
