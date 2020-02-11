'use strict';
// dependencies
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const input = new Input();
const notes = new Notes(input);

// validate input and either process if good values else print error message invalid
input.validate() ? notes.execute() : help();

// message printed when input isn't valid
function help() {
  console.log(`
  notes USAGE: notes -add|-a -p '<your note>'

    -add | -a - add a note to your notes
    -p        - 'your note text'
  `)

  process.exit();
}
