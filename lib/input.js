'use strict';

// dependencies
const minimist = require('minimist');

// constructor for user input
function Input() {
  let args = minimist(process.argv.slice(2));
  this.command = this.parseInput(args);
}

// takes user inputand creates an object
Input.prototype.parseInput = (args) => {

  let validArgs = {
    a: 'add',
    add: 'add',
  }

  let allArgs = Object.keys(args);
  let keyOfArg = allArgs.filter(arg => validArgs[arg])[0];

  return {
    action: validArgs[keyOfArg],
    payload: args[keyOfArg],
  }
}

// validates if the object created from the user input is properly formed
Input.prototype.validate = function() {
  return this.command.action && this.command.payload && this.command.payload !== true ? true : false;
}

module.exports = Input;