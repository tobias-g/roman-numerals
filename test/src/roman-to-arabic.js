/* global describe, it, expect */
'use strict';

let chai     = require('chai');
let sinon    = require('sinon');
let expect   = chai.expect;
let assert   = chai.assert;

let romanToArabic = require('../../src/roman-to-arabic');

describe('Roman to Arabic', function () {
    let env = {};

    beforeEach(function () {
        env.sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        env.sandbox.restore();
    });

    describe('with valid arguments', function () {
        describe('the base symbols', function () {
            it('should return return 1 for I', function () {
                let output = romanToArabic('I');

                expect(output).to.equal(1);
            });

            it('should return return 5 for V', function () {
                let output = romanToArabic('V');

                expect(output).to.equal(5);
            });

            it('should return return 10 for X', function () {
                let output = romanToArabic('X');

                expect(output).to.equal(10);
            });

            it('should return return 50 for L', function () {
                let output = romanToArabic('L');

                expect(output).to.equal(50);
            });

            it('should return return 100 for C', function () {
                let output = romanToArabic('C');

                expect(output).to.equal(100);
            });

            it('should return return 500 for D', function () {
                let output = romanToArabic('D');

                expect(output).to.equal(500);
            });

            it('should return return 1000 for M', function () {
                let output = romanToArabic('M');

                expect(output).to.equal(1000);
            });
        });

        // Some of these tests are repeated from other tests but 1 to 10 is just
        // here for extra comfort/sanity tests and read better than missing out
        // numbers that are testes in other tests. Unit tests are fast a bit of
        // duplication is fine in my books.
        describe('one to ten', function () {
            it('should return return 1 for I', function () {
                let output = romanToArabic('I');

                expect(output).to.equal(1);
            });

            it('should return return 2 for II', function () {
                let output = romanToArabic('II');

                expect(output).to.equal(2);
            });

            it('should return return 3 for III', function () {
                let output = romanToArabic('III');

                expect(output).to.equal(3);
            });

            it('should return return 4 for IV or IIII', function () {
                let output1 = romanToArabic('IV');
                let output2 = romanToArabic('IIII');

                expect(output1).to.equal(4);
                expect(output2).to.equal(4);
            });

            it('should return return 5 for V', function () {
                let output = romanToArabic('V');

                expect(output).to.equal(5);
            });

            it('should return return 6 for VI', function () {
                let output = romanToArabic('VI');

                expect(output).to.equal(6);
            });

            it('should return return 7 for VII', function () {
                let output = romanToArabic('VII');

                expect(output).to.equal(7);
            });

            it('should return return 8 for VIII', function () {
                let output = romanToArabic('VIII');

                expect(output).to.equal(8);
            });

            it('should return return 9 for VIIII', function () {
                let output = romanToArabic('VIIII');

                expect(output).to.equal(9);
            });

            it('should return return 10 for X', function () {
                let output = romanToArabic('X');

                expect(output).to.equal(10);
            });
        });

        describe('addition notation', function () {
            it('should return return 2 for II', function () {
                let output = romanToArabic('II');

                expect(output).to.equal(2);
            });

            it('should return return 13 for XIII', function () {
                let output = romanToArabic('XIII');

                expect(output).to.equal(13);
            });

            it('should return return 207 for CCVII', function () {
                let output = romanToArabic('CCVII');

                expect(output).to.equal(207);
            });

            it('should return return 1066 for MLXVI', function () {
                let output = romanToArabic('MLXVI');

                expect(output).to.equal(1066);
            });
        });

        describe('subtractive notation', function () {
            it('should return return 4 for IV', function () {
                let output = romanToArabic('IV');

                expect(output).to.equal(4);
            });

            it('should return return 9 for IX', function () {
                let output = romanToArabic('IX');

                expect(output).to.equal(4);
            });

            it('should return return 40 for XL', function () {
                let output = romanToArabic('XL');

                expect(output).to.equal(40);
            });

            it('should return return 90 for XC', function () {
                let output = romanToArabic('XC');

                expect(output).to.equal(90);
            });

            it('should return return 400 for CD', function () {
                let output = romanToArabic('CD');

                expect(output).to.equal(400);
            });

            it('should return return 900 for CM', function () {
                let output = romanToArabic('CM');

                expect(output).to.equal(900);
            });
        });
    });
});
