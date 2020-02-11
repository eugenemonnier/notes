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
  // test if action isn't specified that the default value is null
  // it('getAction() defaults to null when no action is specified', () => {
  //   let options = new Input();
  //   expect(options.getMethod()).toEqual(null);
  // });
  // test if invalid value set for action that help function is called

  // test if invalid flag is set that help function is called

  // test if no value is set for payload that help function is called
  it('parseInput() returns a properly formed object', () => {
    const options = new Input();
    const command = options.parseInput({ a: 'this works'});
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();
  })

  // test if valid values for input are entered that note object is created.
  it('validate() respects a properly formed input', () => {
    const options = new Input();
    expect(options.validate()).toBeTruthy();
  });

  it('valid() rejects an improperly formed input', () => {
    let options = new Input();
    options.command = {};
    expect(options.validate()).toBeFalsy();
  });
});
