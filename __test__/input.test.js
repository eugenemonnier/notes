'use strict';

// dependencies
jest.mock('minimist');
const minimist = require('minimist');

// mock user input
minimist.mockImplementation(() => {
  return {
    a: 'add',
    p: 'bup bup!'
  }
});

const Input = require('./../lib/input.js');

describe('Input Module', () => {
  // test if action isn't specified that the default value is null
  it('getAction() defaults to null when no action is specified', () => {
    let options = new Input();
    expect(options.getMethod()).toEqual(null);
  });
  // test if invalid value set for action that help function is called

  // test if invalid flag is set that help function is called

  // test if no value is set for payload that help function is called

  // test if valid values for input are entered that note object is created.

})
