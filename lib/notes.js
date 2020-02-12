//dependencies
const Validator = require('./validator');

class Notes {

  // Notes constructor
  constructor(options){
    this.action = options.command.action;
    this.payload = options.command.payload;
  }

  // executes a given function based on which action the user chose
  execute() {
    switch(this.action){
    case 'add': this.add(this.payload); break;
      // case "delete": ; break
    default: break;
    }
  }

  // console.logs user's payload
  add(payload) {
    console.log(`Adding note: ${payload}`);
  }

  // set rules for Notes object and call the validate method on it
  valid() {
    const rules = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true},
    };
    const validator = new Validator(rules);
    return validator.validate(this);
  }

}

module.exports = Notes;
