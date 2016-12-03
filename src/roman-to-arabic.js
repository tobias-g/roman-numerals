'use strict';

const ROMAN_VALUES = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
};

/**
 * Takes a string that is a Roman numeral and returns an int of the Arabic
 * number.
 * @param  {string} romanNumeral Roman numeral
 * @return {int}                 Arabic numeral
 */
function romanToArabic(romanNumeral) {
    let sum = 0;

    // loop through the roman number and add the letter values to a final sum
    for (let letter of romanNumeral) {
        sum += ROMAN_VALUES[letter.toLowerCase()] ? ROMAN_VALUES[letter.toLowerCase()] : 0 ;
    }

    return sum; // stub for now
}

module.exports = romanToArabic;
