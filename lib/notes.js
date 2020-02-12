'use strict'; 

class Notes {
  
  // Notes constructor
  constructor(options){
    this.action = options.command.action;
    this.payload = options.command.payload;
  }

  // executes a given function based on which action the user chose
  execute() {
    switch(this.action){
      case "add": this.add(this.payload); break;
      // case "delete": ; break
      default: break;
    }
  }

  // console.logs user's payload
  add(payload) {
    console.log(`Adding note: ${payload}`)
  }
  //
  valid() {
    const rules = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true},
    }
  }
  
}

module.exports = Notes;
