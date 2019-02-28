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
function primeFactors(num) {
    let res = "";

    for (let i = 2; i <= num; i++) {
        let pwr = 0;

        while (num % i === 0) {
            pwr++;
            num /= i;
        }
        res += pwr ? "(" + (pwr > 1 ? i +"**"+ pwr : i) + ")" : "";
    }
    return res || "(" + num + ")";
}

// Problem 17
// You will complete the PaginationHelper class,
// which is a utility class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer indicating how many items will be
// allowed per each page. The types of values contained within the collection/array are not relevant.

/**
 * The constructor
 * @param {array} collection - items
 * @param {number} itemsPerPage - indicating how many items fit within a single page
 * @constructor
 */
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
};

/**
 * Counts number of pages
 * @return {number}
 */
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
};

/**
 * Counts the number of items on the current page
 * @param {number} pageIndex - zero-based
 * @return {number} - returns -1 for itemIndex values that are out of range
 */
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (this.itemCount() === 0) return 0;
    if (pageIndex > this.pageCount()-1 || pageIndex < 0) return -1;
    if (pageIndex === this.pageCount()-1) {
        // then we're on the last page
        return this.itemCount() % this.itemsPerPage;
    } else return this.itemsPerPage;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
/**
 * Determines what page an item is on
 * @param {number} itemIndex - zero-based
 * @return {number} - returns -1 for itemIndex values that are out of range
 */
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex > this.itemCount()-1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
};

// Problem 18
// Complete the function/method (depending on the language) to return true/True when
// its argument is an array that has the same nesting structure as the first array.
// Example
// should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
//
// should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

/**
 * Checks whether its argument is an array that has the same nesting structure as the first array.
 * @param {*} other
 * @return {boolean}
 */
Array.prototype.sameStructureAs = function (other) {
    if (Array.isArray(this) && !Array.isArray(other)) return false;

    for (let i = 0; i < this.length; i++) {
        if (this.length !== other.length) return false;
        if (Array.isArray(this[i]) && Array.isArray(other[i])) {

            if (!this[i].sameStructureAs(other[i])) return false;

        } else if (Array.isArray(this[i]) || Array.isArray(other[i])) return false;
    }
    return true;
};


// Problem 19
// Write a function that gets n-th fibonacci in an efficient way
/**
 * Gets n-th fibonacci number
 * @param {number} n
 * @return {number}
 */
let fibonacci = function(n) {
    if (n < 1) return 0;
    let fibs = [1, 1];
    function getFib(n) {
        for (let i = 2; i <= n; i++) {
            let prev = fibs[i-1];
            let prevPrev = fibs[i-2];

            fibs.push(prev + prevPrev);
        }
        return fibs[n];
    }
    return getFib(n-1);
};

// Problem 20
// Given the string representations of two integers, return the string representation of the sum of those integers.
// in case of big numbers - NO SCIENTIFIC NOTATION should be used

/**
 * Represents the sum of two integers
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function sumBigNumStrings(num1, num2) {
    // We add these numbers as we would do it in columns
    // Example
    //  439
    // + 21
    // ----
    //  460
    // If the length of one of the numbers is less than the length of the another one, we add zeros to the
    // beginning of the number with the smallest length
    // Example
    // num1 = "1568", num2 = "45" -> num2 = "0045"

    let minStr, maxStr, zeros = "";
    let numZeros = 0;

    if (num1.length < num2.length) {
        numZeros = num2.length - num1.length;
        minStr = num1;
        maxStr = num2;
    } else if (num1.length > num2.length) {
        numZeros = num1.length - num2.length;
        minStr = num2;
        maxStr = num1;
    } else {
        minStr = num1;
        maxStr = num2;
    }

    for (let i = 0; i < numZeros; i++) zeros += "0";
    minStr = zeros + minStr;

    let res = [];
    let tens = 0; // количество десятков

    for (let i = maxStr.length - 1; i >= 0; i--) {
        let mod = (Number(maxStr[i]) + Number(minStr[i]) + tens) % 10;
        res.unshift(mod);
        tens = ((Number(maxStr[i]) + Number(minStr[i]) + tens) - mod) / 10;
    }
    if (tens > 0) res.unshift(tens);
    if (res[0] === 0) res.shift();

    return res.join("");
}

// Problem 21
// Given an n x n array, return the array elements arranged from outermost elements to the middle element,
// traveling clockwise.
// Example
// [[1,2,3],
//  [4,5,6],  -> [1,2,3,6,9,8,7,4,5]
//  [7,8,9]]


/**
 * Arranges elements from outermost ones to the middle element, traveling clockwise.
 * @param {array} array
 * @return {array}
 */
function snail(array) {
    if (array.length === 1 && array[0].length === 0) return []; // in case when array is [[]]

    let startCol = 0;
    let startRow = 0;
    let stopCol = array.length - 1;
    let stopRow = 0;

    let snailed = [];
    let numElem = array.length ** 2;

    // First, we look at 'outer' elements of a matrix (1st row -> last column -> last row and -> 1st column)
    // Then we do the same things with an 'inner matrix' of that matrix, by not looking on the 'outer' elements
    // Example
    // Matrix           Outer elements     Inner matrix
    // |1   2   3   4|  |1   2   3   4|
    // |5   6   7   8|  |5           8|    |6    7|     Then we look for 'outer' elements of the inner matrix and so on
    // |9  10  11  12|  |9          12|    |10  11|
    // |13 14  15  16|  |13 14  15  16|

    let numInnerMatrix = 0; // to count how many inner matrices we have

    while (snailed.length < numElem) {
        //working with 'outer' elements

        // in case when the matrix has only one element
        if (startCol === stopCol && startRow === stopRow) snailed.push(array[stopRow][stopCol]);

        // go through the 1st row
        if (startCol === startRow) {
            while (startCol < stopCol) {
                snailed.push(array[startRow][startCol]);
                startCol++;
            }
        }

        // go through the last column
        if (startCol === stopCol) {
            stopRow = array.length - numInnerMatrix - 1;
            while (startRow < stopRow) {
                snailed.push(array[startRow][startCol]);
                startRow++;
            }
        }

        // go through the last row
        if (startRow === stopRow) {
            stopCol = numInnerMatrix; // WARNING
            while (startCol > stopCol) {
                snailed.push(array[startRow][startCol]);
                startCol--;
            }
        }

        // go through the 1st column
        if (startCol === stopCol) {
            stopRow = numInnerMatrix; // WARNING
            while (startRow > stopRow) {
                snailed.push(array[startRow][startCol]);
                startRow--;
            }
        }

        numInnerMatrix++;
        startCol++;
        startRow++;
        stopCol = array.length - numInnerMatrix - 1;
        stopRow = array.length - numInnerMatrix - 1;
        // working with the inner matrix
    }
    return snailed;
}


// Problem 22
// Your task in order to complete this Kata is to write a function which formats a duration,
// given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise,
// the duration is expressed as a combination of years, days, hours, minutes and seconds.
// Example
// 3662 ->  "1 hour, 1 minute and 2 seconds"

/**
 * Formats a duration in a human-friendly way.
 * @param {number} seconds
 * @return {string}
 */
function formatDuration (seconds) {
    // Complete this function
    if (seconds < 0) throw "seconds must be >= 0";
    if (seconds === 0) return "now";

    let time = [];

    let secs = seconds % 60;
    seconds = (seconds - secs) / 60;
    pushTime(secs, "second", time); // see this function below

    let minutes = seconds % 60;
    seconds = (seconds - minutes) / 60;
    pushTime(minutes, "minute", time);

    let hours = seconds % 24;
    seconds = (seconds - hours) / 24;
    pushTime(hours, "hour", time);

    let days = seconds % 365;
    seconds = (seconds - days) / 365;
    pushTime(days, "day", time);

    let years = seconds;
    pushTime(years, "year", time);

    let timePhrase = "";

    for (let i = time.length - 1; i >= 0; i--) {
        if (i > 1) timePhrase += time[i] + ", ";
        else if (i === 1) timePhrase += time[i] + " and ";
        else timePhrase += time[i];
    }

    return timePhrase;
}

/**
 * Pushes a period of time and its string representation to an array
 * @param {number} period
 * @param {string} strPeriod
 * @param {array} arr
 */
function pushTime(period, strPeriod, arr) {
    if (period) arr.push(period + " " + strPeriod + (period > 1 ? "s" : ""));
}

// Problem 23
// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods

// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods

/**
 * Represents a warrior
 * @constructor
 */
function Warrior() {
    let _experience = 100;

    /**
     * Computes the experience of a warrior
     * @return {number}
     */
    this.experience = function() {
        if (_experience >= 10000) return 10000;
        return _experience};

    /**
     * Computes the level of a warrior
     * @return {number}
     */
    this.level = function () {
        if (_experience >= 10000) return 100;
        return Math.floor(_experience / 100);
    };

    let ranks = {
        "Pushover" : [1, 9],
        "Novice" : [10, 19],
        "Fighter" : [20, 29],
        "Warrior" : [30, 39],
        "Veteran": [40, 49],
        "Sage" : [50, 59],
        "Elite" : [60, 69],
        "Conqueror": [70, 79],
        "Champion" : [80, 89],
        "Master" : [90, 99],
        "Greatest": [100, 100]
    };

    /**
     * Computes the rank of a warrior
     * @return {string}
     */
    this.rank = function() {
        for (let rankProp in ranks) {
            let min = ranks[rankProp][0];
            let max = ranks[rankProp][1];
            let level = this.level();

            if (min <= level && level <= max) {
                return rankProp;
            }
        }
    };

    let _achievements = [];

    /**
     * Gets the achievements of a warrior
     * @return {Array}
     */
    this.achievements = () => _achievements;

    /**
     * Trains the warrior
     * @param {array} event - [{string} description, {number} experiencePoints]
     * @return {string} - the description (event[0]) or says that a warrior is not strong enough
     */
    this.training = function (event) {
        let description = event[0];
        let experPoints = event[1];
        let minLevel = event[2];
        let level = this.level();

        if (level >= minLevel) {
            _experience += experPoints;
            _achievements.push(description);
            return description;
        } else return "Not strong enough";
    };

    /**
     * Performs a battle between a warrior and his/her enemy
     * @param {number} enemyLevel
     * @return {string} - information about the battle result
     */
    this.battle = function (enemyLevel) {
        let warriorLevel = this.level();
        let diff = enemyLevel - warriorLevel;

        if (enemyLevel < 1 || enemyLevel > 100) return "Invalid level";
        if (diff <= -2) return "Easy fight";
        if (diff === 0) {
            _experience += 10;
            return "A good fight";
        } else if (diff === -1) {
            _experience += 5;
            return "A good fight";
        } else if (diff >= 1) {

            let warriorRank = this.rank();
            let enemyRank = this.rank.apply({level : () => enemyLevel});

            if (diff >= 5 && ranks[enemyRank][0] > ranks[warriorRank][0]) {
                return "You've been defeated";
            } else {
                _experience += 20 * diff**2;
                return "An intense fight";
            }
        }
    }
}


// Problem 24
// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals,
// and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
// Intervals
// Intervals are represented by a pair of integers in the form of an array.
// The first value of the interval will always be less than the second value.
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
// Overlapping Intervals
// List containing overlapping intervals:
// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap,
// we can treat the interval as [1, 5], which has a length of 4.
/**
 * Counts the sum of lengths of intervals
 * @param {array} intervals - 2D array of intervals, intervals[i][0] -- the start of an interval
 *                                                   intervals[i][1] -- the end of an interval
 * @return {number}
 */
function sumIntervals(intervals) {
    intervals.sort((subArr1, subArr2)=>subArr1[0] - subArr2[0]);
    let starts = [];
    let ends = [];
    let sum = 0;

    for (let i = 0; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        if (starts.length && ends.length) {

            let endsLastItem = ends[ends.length-1];
            if (start <= endsLastItem) {
                end = Math.max(endsLastItem, intervals[i][1]);
                ends.splice(i-1, 1, end);
            } else {
                starts.push(start);
                ends.push(end);
            }
        } else {
            starts.push(start);
            ends.push(end);
        }
    }
    for (let i = 0; i < starts.length; i++) {
        sum += (ends[i] - starts[i])
    }
    return sum;
}