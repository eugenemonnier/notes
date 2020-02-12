'use strict';
// dependencies
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const input = new Input();
const notes = new Notes(input);

// validate input and either process if good values else print error message invalid
input.valid() ? notes.execute(input) : help();

// message printed when input isn't valid
function help() {
  console.log(`
  notes USAGE: notes -add|-a '<your note>'

    --add | -a - add an entry to your notes
  `)

  process.exit();
}
