'use strict';

var romanToArabic = require('./src/roman-to-arabic');

let args          = process.argv.slice(2);
let romanNumeral  = args[0];
let arabicNumeral = romanToArabic(romanNumeral);

console.log(`Hello ${arabicNumeral}`);

