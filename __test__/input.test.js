const Input = require('./../lib/input.js');

// dependencies
jest.mock('minimist');
const minimist = require('minimist');

// mock user input
minimist.mockImplementation(() => {
  return {
    a: 'bup bup!',
  };
});


describe('Input Module', () => {

  // test if parseInput() returns a properly formed object when given valid data
  test('parseInput() returns a properly formed object', () => {
    const options = new Input();
    const command = options.parseInput({ a: 'this works'});
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();
  });

  // test if valid() will accept a properly formed object
  test('valid() respects a properly formed input', () => {
    const options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  // test if valid() will reject an improperly formed object (missing payload)
  test('valid() rejects an improperly formed input', () => {
    let options = new Input();
    options.command = {a: 'bup-bup'};
    expect(options.valid()).toBeFalsy();
  });

  // test if valid() will reject an improperly formed object (missing action)
  test('valid() rejects an improperly formed input', () => {
    let options = new Input();
    options.command = {p: 'bup-bup'};
    expect(options.valid()).toBeFalsy();
  });

  // test if valid() will reject an improperly formed object (not an object)
  test('valid() rejects an improperly formed input', () => {
    let options = new Input();
    options.command = 'bup-bup';
    expect(options.valid()).toBeFalsy();
  });

});
