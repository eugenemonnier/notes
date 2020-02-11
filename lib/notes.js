'use strict'; 
// global variables
let noteIndex = 1;

function Notes(options) {
  this.action = options.command.action;
  this.payload = options.command.payload;
}

Notes.prototype.execute = function() {
  switch(this.action){
    case "add": this.add(this.payload); break;
    // case "delete": ; break
    default: break;
  }
}

Notes.prototype.add = (payload) => {
  console.log(`Adding note: ${payload}`)
}

module.exports = Notes;
