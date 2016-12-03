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
});
