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
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
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

// Problem 11
// Given an array, find the int that appears an odd number of times.

/**
 * Finds the int that appears an odd number of times.
 * @param {array} arr
 * @return {number}
 */
function findOdd(arr) {
    let times = {};
    for (let i = 0; i < arr.length; i++) {
        if (!times.hasOwnProperty(arr[i])) {
            times[arr[i]] = 1;
        } else {
            times[arr[i]]++;
        }
    }
    for (let elem in times) {
        if(times[elem] % 2 !== 0) return Number(elem);
    }
    return 0;
}

// Problem 12
// Write a number in the expanded form
// Example
// 341 = 300 + 40 + 1

/**
 * Writes a number in the expanded form
 * @param {number} num
 * @return {string}
 */
function expandedForm(num) {
    let expanded = [];
    let pwrOfTen = 0;

    while (num >= 1) {
        if (num % 10 !== 0) expanded.unshift(num%10 * 10**pwrOfTen);
        num -= num % 10;
        num /= 10;
        pwrOfTen++;
    }
    return expanded.join(" + ");
}

// Problem 13
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number the number 1 should be appended to the new string.
// Example
// foo -> foo1
// bar02 -> bar03
// foobar12 -> 13
// " " -> 1

/**
 *  Increments a string
 * @param {string} string
 * @return {string}
 */
function incrementString (string) {
    // return incrementedString
    let idxNum = string.search(/\d/);
    if (idxNum === -1) return string + 1;

    let text = string.slice(0, idxNum);
    let num = Number(string.slice(idxNum));

    num++;

    let zeros = string.length - (text + num).length;
    if (zeros > 0) {
        for (let i = 0; i < zeros; i++) {
            text += 0;
        }
    }
    return text + num;
}

// Problem 14
// Find lowest common denominator of an array of fractions and convert the array to the string
// Example
// [[1, 2], [1, 3], [1, 4]] -> "(6, 12)(4, 12)(3, 12)"

// there are 3 helpers: gcd(), lcm() and packTwoDim(), they are below convertFrac();
/**
 * Find lowest common denominator of an array of fractions and convert the array to the string
 * @param {array} arr
 * @return {string}
 */
function convertFrac(arr){
    //Your code here
    if (arr.length === 0) return "";

    let converted = "";
    let numers = packTwoDim(arr, 0);
    let denoms = packTwoDim(arr, 1);

    let lcmDenom = denoms.reduce((accum, curr)=>{
        return lcm(accum, curr);
    });

    for (let i = 0; i < numers.length; i++) {
        numers[i] *= lcmDenom / denoms[i];
        converted += "("+ numers[i] + "," + lcmDenom +")";
    }

    return converted;
}

/**
 * Find the greates common divider of the two numbers
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function gcd(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    if (min === 0) return max;
    return gcd(min, max % min);
}

/**
 * Finds the least common multiple of two numbers
 * @param num1
 * @param num2
 * @return {number}
 */
function lcm(num1, num2) {
    return Math.abs(num1* num2) / gcd(num1, num2);
}

/**
 * Packs all elements of a 2D array that are array[i][idx] to another array
 * Example
 * packTwoDim([[1, 2], [3, 4]], 0) -> [1, 3]
 * @param {array} arr
 * @param {number} idx
 * @return {array}
 */
function packTwoDim(arr, idx) {
    let pack = [];
    for (let i = 0; i < arr.length; i++) pack.push(arr[i][idx]);
    return pack;
}

// Problem 15
// Translate a string to PigLatin
// Example
// Foo Bar -> ooFay arBay

/**
 * Translates a string to PigLatin
 * @param {string} str
 * @return {string}
 */
function pigIt(str){
    //Code here
    let words = str.split(" ");
    let pig = [];

    for (let i = 0; i < words.length; i++) {
        if (!words[i].match(/[!.?,]/)) {
            let pigWord = words[i].slice(1) + words[i].slice(0, 1) + "ay";
            pig.push(pigWord);
        } else {
            pig.push(words[i])
        }
    }
    return pig.join(" ");
}

// Problem 16
// Given a positive number n > 1 find the prime factor decomposition of n.
// Example
// 86240 -> "(2**5)(5)(7**2)(11)"

/**
 * Finds the prime factor decomposition of num
 * @param {number} num
 * @return {string}
 */
function primeFactors(num){
    //your code here
    let str = "";
    for (let i = 1; i <= num; i++) {
        let pwr = 0;
        if (isPrime(i)) {
            if (num % i === 0) {
                while (num % i === 0) {
                    pwr++;
                    num /= i;
                }
                switch (pwr) {
                    case 1:
                        str += "(" + i + ")";
                        break;
                    default:
                        str += "(" + i + "**" + pwr + ")";
                        break;
                }
            }
        }
    }
    return str;
}