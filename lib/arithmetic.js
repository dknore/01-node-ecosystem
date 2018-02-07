"use strict";

// Create add and sub methods that implement addition and subtraction.

// The ADD method should:
// - have an arity of two (define two paramiters)
// - If either parameter is a non-number the function should return null
// - Else return the sum of the 2 numbers

// function Arithmetic() {
    function addNum(num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) === 'number') {
            return null;
        } else {
            return sum(num1 + num2);
        }
    }

    // The SUB method should:
    // -  have an arity of two (define two paramiters)
    // - If either parameter is a non-number the function should return null
    // - Else return the second paramiter subtracted from the first parameter

    function subNum(num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) === 'number') {
            return null;
        } else {
            return sum(num1 - num2);
        }
    }
// }

module.exports = {};
module.exports.addNum = addNum;
module.exports.subNum = subNum;