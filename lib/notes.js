'use strict'; 
// global variables
let noteIndex = 1;
const noteEntry = {};

//checks which action supplied by user and runs correspoinding function
noteEntry.writeOut = function (opts) {
  if(opts.action === 'add' || opts.action === 'a') {
    noteEntry.add(opts);  }
  process.exit();
}

// add note, calls AddNote constructor, responds with message, and returns resulting object
noteEntry.add = (note) => {
  let newEntry = new AddNote(note);
  console.log(`You added a note of: ${newEntry.text} with an ID of ${newEntry.id}`);
  return newEntry;
}

// constructor for add action
function AddNote(note) {
  this.id = noteIndex;
  this.text = note.payload
}

module.exports = noteEntry;
