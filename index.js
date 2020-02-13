// dependencies
const mongoose = require('mongoose');

const Input = require('./lib/input');
const Notes = require('./lib/notes');

const input = new Input();
const notes = new Notes(input);

// connect to Mongoose
mongoose.connect('mongodb://localhost:27017/fetch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// validate input and either process if good values else print error message invalid
input.valid() ? notes.execute(input) : help();

// message printed when input isn't valid
function help() {
  console.log(`
  notes USAGE: notes 

    --add | -a <your note> - add an entry to your notes
      --category <category> - give your note a category

    --list | -l <optional category> - list all notes | all notes in catefory

    --delete | -d <note id> - delete note by id
  `);

  process.exit();
}
