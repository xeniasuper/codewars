"use strict";

// Problem 1
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

/**
 * Creates an array which contains digits of a number
 * @param {number} num
 * @return {array}
 */
function getDigits(num) {
    let digits = [];
    if (num === 0) digits.push(0);

    while (num !== 0) {
        let remainder = num % 10;
        digits.push(remainder);
        num -= remainder;
        num = Math.floor(num / 10);
    }
    return digits.reverse();
}

//console.log(getDigits(156));


// // Problem 2
/**
 * Counts the number of times you must multiply digits in a number until reaches a single digit
 * @param {number} num
 * @return {number}
 */
function persistence(num) {
    //code me
    let times = 0;
    function countTimes() {
        while(num > 9) {
            times++;
            let digits = getDigits(num);
            num = digits.reduce((accum, curr) => accum * curr);
        }
        return times;
    }
    return countTimes();
}

//console.log(persistence(39));

// Problem 3
//Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

/**
 * Gives the length of the shortest word in a string
 * @param {string} s
 * @return {number}
 */
function findShort(s){
   let min = Infinity;
   let str = s.split(" ");
   for (let i = 0; i < str.length; i++) {
       if (str[i].length < min) {
           min = str[i].length;
       }
   }
   return min;
}

//console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


// Problem 4
// Write a function that takes a string of braces, and determines if the order of the braces is valid. 
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// A string of braces is considered valid if all braces are matched with the correct brace.


/**
 * Determines if the order of the braces is valid
 * @param {string} braces
 * @return {boolean}
 */
function validBraces(braces) {
    let stack = [];
    let bracesPairs = {
        "{": "}",
        "(": ")",
        "[": "]"
    };

    for (let i = 0; i < braces.length; i++) {
        let brace = braces[i];

        if (bracesPairs.hasOwnProperty(brace)) {
            // then we met an opening brace
            stack.push(brace);
        } else {
            // then we met a closing brace
            let lastIdx = stack.length - 1;

            if (bracesPairs[stack[lastIdx]] === brace) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

//console.log(validBraces( "[{}]" ));