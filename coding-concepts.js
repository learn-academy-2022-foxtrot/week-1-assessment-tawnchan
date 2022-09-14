// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: code pushes the string "indigo" into the end of the array called 'colors' and returns back the new length of the array, which is 5.
// b) Verify and explain: terminal returns 5 which is now the new length of the array, colors. 


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: this will return the lenghth of charactrs in the string that is in the variable cohort.
// b) Verify and explain: it returns back the number 10.. which is the number of characters in the string.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: it will return the value in index number 4 of the variable 'greeting'.
// b) Verify and explain: it returned 0 becaise we called upon the variable 'greeting' and by placing the number '4' inside [] we are asking the computer to return the value inside that slot.  


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: it will 'ruby' because the code asks thee computer to look inside and the languages array and return the value in indext 1 because the const 'index' was declared as 1.
// b) Verify and explain: terminal returned "Ruby" as expected because we declared what 'index' has a value of. we can either change the value of the const index to another number 0 - 4 and we would pull the corresponding indextvalue from the const languages.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it should console.log the values in the array to uppercase.
// b) Verify and explain: it did not... it returns an error saying .toUpperCase is not a function. I think its because it doesn't work on arrays. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: I honestly didn't understand this one so i had to uncomment the console.log and see what would happen.  I didn't understand what was going on.. so i looked it up.
// b) Verify and explain: the 'typeof' method calls what kind of data type is requested.. since the method .length returns a number data type... the console log returns "number". 