'use strict';

// dependencies
const minimist = require('minimist');

const rules = {
  action: {required: true},
  payload: {required: true},
}

// constructor for user input
function Input() {
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(args.a);
  this.payload = this.getPayload(args.p);
}

// verifying valid actions are being used
Input.prototype.getAction = (action = '') => {
  let validActions = /a|add/i;
  return validActions.test(action) ? action : null;
}

//  console logs payload and returns it
Input.prototype.getPayload = (payload = '') => {
  return payload;
}

// validate that the proper flags were used
Input.prototype.validate = function() {
  return Object.keys(rules).every((option) => {
    return rules[option].required ? !!this[option] : true;
  });
}

module.exports = Input;