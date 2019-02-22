"use strict";
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

/**
 * Counts the number of times you must multiply digits in a number until you reach a single digit
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

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));