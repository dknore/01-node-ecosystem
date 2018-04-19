'use strict';

const greet = require('../lib/greet.js');

describe('greet function', () => {
  
  it('should return null when you supply an array', () => {
    expect(greet([])).toBe(null);
  })

  it('should return null when you supply an object', () => {
    expect(greet({})).toBe(null);
  })

  it('should return "hello world" when "world" is passed as the argument', () => {
    expect(greet('world')).toBe('hello world');
  })

  it('should return "hello susan" when "susan" is passed as the argument', () => {
    expect(greet('susan')).toBe('hello susan');
  })
})