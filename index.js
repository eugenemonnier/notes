'use strict';
// dependencies
const Input = require('./lib/input');
const noteEntry = require('./lib/notes');

// validate input and either process if good values else print error message invalid
const options = new Input();
options.validate() ? noteEntry.writeOut(options) : help();

// message printed when input isn't valid
function help() {
  console.log(`
  notes USAGE: notes -add|-a -p '<your note>'

    -add | -a - add a note to your notes
    -p        - 'your note text'
  `)

  process.exit();
}
