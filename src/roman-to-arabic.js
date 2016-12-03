'use strict';

const ROMAN_VALUES = {
    // base values
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
    // subtractive notation
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
        let prevLetter    = index > 0 ? romanNumeral[index - 1].toLowerCase() : null;
        let currentLetter = letter.toLowerCase();

        // there are a few specific cases to avoid four characters being
        // repeated in succession (such as IIII or XXXX), subtractive notation
        // is used
        if (index > 0 && ROMAN_VALUES[currentLetter] > ROMAN_VALUES[prevLetter]) {
            // use subtraction notation, first ignore the addition from the last
            // character
            sum -= ROMAN_VALUES[prevLetter];

            // now add the value from the subtractive notation
            let letterGroup = `${prevLetter}${currentLetter}`;
            sum += ROMAN_VALUES[letterGroup] ? ROMAN_VALUES[letterGroup] : 0;
        } else {
            sum += ROMAN_VALUES[currentLetter] ? ROMAN_VALUES[currentLetter] : 0 ;
        }
    });

    return sum;
}

module.exports = romanToArabic;
