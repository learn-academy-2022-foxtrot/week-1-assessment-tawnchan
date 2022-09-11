// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process: 
// create conditional statements using ".length" and using "relational operators" to determine which variable has the longer length and printing out the corresponding variable.


// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// if (fruit1.length > fruit2.length)  {
//     console.log(fruit1)
// } else if (fruit1.length < fruit2.length) {
//     console.log(fruit2)
// } else {
//     console.log("Something went wrong")
// }

// Set two:
const fruit1 = "cherry"
const fruit2 = "kiwi"
// Expected outcome: "cherry"

if (fruit1.length > fruit2.length)  {
    console.log(fruit1)
} else if (fruit1.length < fruit2.length) {
    console.log(fruit2)
} else {
    console.log("Something went wrong")
}

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: 
//create a variable to contain boiling point value.
const boilingPoint = 212

//create a conditional statement to determine which value is greater and less than and print corresponding outcome and concatenating it to whether it is "below boiling point", "above boiling point", "It is at boiling point"


// const temp = 42 
// Expected output: "42 is below boiling point"

// const temp = 350
// Expected output: "350 is above boiling point"

const temp = 212
// Expected output: "212 is at boiling point"

if (boilingPoint > temp) {
    console.log(`${temp} is below boiling point`)
} else if (boilingPoint < temp) {
    console.log(`${temp} is above boiling point`)
} else {
    console.log("It is at boiling point")
}

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: 
// Create a new array and in it, concat the two given arrays.
// Console.log the using the .length of the new array to get the expected output.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const comboArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);
console.log(comboArray.length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process: 
// use .split("") method to split "Foxtrot 2022", which is a string, into individual elements of an array
// use .reverse() method to reverse flip the order of the elements of the new array
// use .join("") to combine the elements of the array into a string.
// console.log the result which should produce the expected output: "2202 tortxoF"


const currentCohort = "Foxtrot 2022"
console.log(currentCohort.split("").reverse().join(""))
// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// console.log using the .lastIndexOf("") the givenValues in the array to retrieve the last index of the given value.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(42));
// Expected output: 7

const givenValue2 = 10

console.log(myNumbers.lastIndexOf(10));
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// Use the .sort to sort the variables in the array from lowest number value to highest number value.
// use the function and return method to flip the order again so now it returns the highest value to lowest value.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoSummerTemperatures.sort(function(a, b){return b-a})
console.log(sanDiegoSummerTemperatures)


const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


sanDiegoWinterTemperatures.sort(function(a, b){return b-a})
console.log(sanDiegoWinterTemperatures)