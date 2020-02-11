'use strict';

const Input = require('./lib/input');
const noteEntry = require('./lib/notes');

const options = new Input();
options.validate() ? noteEntry.writeOut(options) : help();

function help() {
  console.log(`
  
  notes USAGE: notes -add|-a -p '<your note>'

    -add | -a - add a note to your notes
    -p        - 'your note text'
  `)

  process.exit();
}