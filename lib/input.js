'use strict';

// dependencies
const minimist = require('minimist');

// constructor for user input
class Input {
  constructor(){
  let args = minimist(process.argv.slice(2));
  this.command = this.parseInput(args);
  }

  // takes user inputand creates an object
  parseInput(args) {

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
  validate() {
    return this.command.action && this.command.payload && this.command.payload !== true ? true : false;
  }

  //
  valid() {
    const rules = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true},
    }
  }

}

module.exports = Input;