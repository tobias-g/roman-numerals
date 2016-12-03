'use strict';

const ROMAN_VALUES = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,

    iv: 4,
    ix: 9,
    xl: 40,
    xc: 90,
    cd: 400,
    cm: 900
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
    romanNumeral.split('').forEach(function (letter, index) {
        // there are a few specific cases to avoid four characters being
        // repeated in succession (such as IIII or XXXX), subtractive notation
        // is used
        let prevLetter = romanNumeral[index - 1];
        if (index > 0 && ROMAN_VALUES[letter.toLowerCase()] > ROMAN_VALUES[prevLetter.toLowerCase()]) {
            // use subtraction notation, first ignore the addition from the last
            // character
            sum -= ROMAN_VALUES[prevLetter.toLowerCase()];

            // now add the value from the subtractive notation
            sum += ROMAN_VALUES[`${prevLetter}${letter}`.toLowerCase()];
        } else {
            sum += ROMAN_VALUES[letter.toLowerCase()] ? ROMAN_VALUES[letter.toLowerCase()] : 0 ;
        }
    });

    return sum; // stub for now
}

module.exports = romanToArabic;
