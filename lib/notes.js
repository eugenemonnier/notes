'use strict'; 
// global variables
let noteIndex = 1;

// Notes constructor
function Notes(options) {
  this.action = options.command.action;
  this.payload = options.command.payload;
}

// executes a given function based on which action the user chose
Notes.prototype.execute = function() {
  switch(this.action){
    case "add": this.add(this.payload); break;
    // case "delete": ; break
    default: break;
  }
}

// console.logs user's payload
Notes.prototype.add = (payload) => {
  console.log(`Adding note: ${payload}`)
}

module.exports = Notes;
