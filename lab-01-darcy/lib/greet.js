'use strict';

function greet(str) {
  if (typeof str !== 'string') {
    return null;
  } else {
    return 'hello ' + str;
  }
}

module.exports = greet;