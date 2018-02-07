"use strict";

// Write a Greet funtion that:
// - contains a single parameter (arity of one)
// - expects a string as it's input
// - returns the input name, concatenated with "hello ": eg. ("hello susan")
// - returns NULL if the input is not a string

function greet(str) {
  if(typeof(str) !== 'string') {
    return null;
  } else {
    return 'hello ' + str;
  }
}
module.exports = {};
module.exports.greet = greet;