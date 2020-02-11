'use strict';

const Input = require('./../lib/input.js');

// dependencies
jest.mock('minimist');
const minimist = require('minimist');

// mock user input
minimist.mockImplementation(() => {
  return {
    a: 'bup bup!'
  }
});


describe('Input Module', () => {

  // test if parseInput() returns a properly formed object when given valid data
  it('parseInput() returns a properly formed object', () => {
    const options = new Input();
    const command = options.parseInput({ a: 'this works'});
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();
  })

  // test if validate() will accept a properly formed object
  it('validate() respects a properly formed input', () => {
    const options = new Input();
    expect(options.validate()).toBeTruthy();
  });

  // test if validate() will reject an improperly formed object
  it('validate() rejects an improperly formed input', () => {
    let options = new Input();
    options.command = {};
    expect(options.validate()).toBeFalsy();
  });
});
