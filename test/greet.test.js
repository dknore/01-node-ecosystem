"use strict";

const greet = require('../lib/greet.js').greet;

describe("greet function", () => {
    describe("it should return null when input is not a string", () => {
        let expected = null;
        it("it should return null if input is an Array", () => {
            let str = [];
            let result = greet(str);
            expect(result).toBe(expected);
        })
        it("it should return null if input is '45'", () => {
            let str = 45;
            let result = greet(str);
            expect(result).toBe(expected);
        })
    })

    describe("it should return 'hello world' when 'world' is the first argument", () => {
        let expected = 'hello world';
        it("it should return 'hello world' for input 'world'", () => {
            let str = 'world'
            let result = greet(str);
            expect(result).toBe(expected);
        })
    })
})
