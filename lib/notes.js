'use strict'; 
let noteIndex = 1;
const noteEntry = {};

noteEntry.writeOut = function (opts) {
  if(opts) {
    console.log(`You ${opts.method}'ed a note of: ${opts.payload}`);
  }
  process.exit();
}



// noteEntry.prototype.add = (note) => {
//   let newEntry = new AddNote(note);
//   console.log(`You added a note of: ${newEntry.text} with an ID of ${newEntry.id}`);
//   return newEntry;
// }

function AddNote() {
  this.id = noteIndex;
  this.text = this.payload
}

module.exports = noteEntry;