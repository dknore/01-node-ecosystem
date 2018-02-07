"use strict";

// Create a function that contains the following methods:

// A SUM function that:
// - accepts an array
// - returns the total of all the elements in the array.
// - returns 0 if the array is empty

// A MIN function that:
// - returns the smallest value from an array
// - returns undefined if the array is empty

// An isSorted function that:
// - returns true if all the elements in the array appear in ascending order.
// - returns true if the array is empty

function ArrayUtil(arr) {
  
  function sumArr(arr) {
    if (arr.length === 0) {
        return 0;
      }
    var sum = arr.reduce(function (a, b) {
        return a + b;
      }, 0);
  }

  function minArr(arr) {
    if (arr.length === 0) {
        return undefined;
      } 
    return Math.min(arr);
  }
  
  function isSorted(arr) {
    if (arr.length === 0) {
        return true;
    }
  }
}

module.exports = {};
module.exports.ArrayUtil = ArrayUtil;