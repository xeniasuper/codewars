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

// Problem 5
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter,
// he is known for almost always capitalizing every word.
// Your task is to convert strings to how they would be written by Jaden Smith.
// Example
// make me jaden case -> Make Me Jaden Case

/**
 * Capitalizes every word of the string
 * @return {string}
 */
String.prototype.toJadenCase = function () {
    return this.replace(/\s\w|^\w/g, (match) => match.toUpperCase());
};

//console.log("make me jaden case".toJadenCase());

// Problem 6
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric
// digits that occur more than once in the input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.
//
//  Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

/**
 * Counts distinct case-insensitive alphabetic characters and numeric digits
 * that occur more than once in the input string
 * @param {string} text
 * @return {number}
 */
function duplicateCount(text){
    let occurrences = {};
    let textLower = text.toLowerCase();

    for (let i = 0; i < textLower.length; i++) {
        if (!occurrences.hasOwnProperty(textLower[i])) {
            occurrences[textLower[i]] = 1;
        } else {
            occurrences[textLower[i]] += 1;
        }
    }

    let counter = 0;
    for (let letter in occurrences) {
        if (occurrences[letter] > 1) counter++;
    }

    return counter;
}

// Problem 7
// Given an integral number, determine if it's a square number

/**
 * Determines if a number is a square
 * @param {number} num
 * @return {boolean}
 */
function isSquare(num){
    return Math.sqrt(num) === Math.ceil(Math.sqrt(num));
}

// Problem 8
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// You have function with one side of the DNA; you need to get the other complementary side.
// DNA strand is never empty or there is no DNA at all.

/**
 * Get the complementary side of a DNA string
 * @param {string} dna
 * @return {string}
 */
function DNAStrand(dna){
    let complementary = "";
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "A":
                complementary += "T";
                break;
            case "T":
                complementary += "A";
                break;
            case "C":
                complementary += "G";
                break;
            case "G":
                complementary += "C";
                break;
        }
    }
    return complementary;
}

// Problem 9
// Detect whether a number is prime

/**
 * Detects whether a number is prime
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
    if (num <= 1) return false;

    let divisors = 1;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) divisors++;
        if (divisors > 2) return false;
    }
    return true;
}

// Problem 10
//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

/**
 * Determines if the order of the parentheses is valid.
 * @param {string} parens
 * @return {boolean}
 */
function validParentheses(parens){
    let stack = [];

    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === "(") {
            stack.push(parens[i]);
        } else {
            let pop = stack.pop();
            if (pop === undefined) return false;
        }
    }
    return stack.length === 0;
}