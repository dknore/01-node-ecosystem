"use strict";

const addNum = require('../lib/arithmetic.js').addNum;
const subNum = require('../lib/arithmetic.js').subNum;

describe("addNum function", () => {
    describe("it should return null if either parameter is not a number", () => {
        let expected = null;
        it("it should return null for a string", () => {
            let num1 = "not a number";
            let num2 = "not a number";
            let result = addNum(num1, num2);
            expect(result).toBe(expected);
        })
    })
})

describe("subNum function", () => {
    describe("it should return null if either parameter is not a number", () => {
        let expected = null;
        it("it should return null for a string", () => {
            let num1 = "not a number";
            let num2 = "not a number";
            let result = subNum(num1, num2);
            expect(result).toBe(expected);
        })
    })
})
