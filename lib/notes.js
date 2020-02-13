//dependencies
const Validator = require('./validator');
const mongoose = require('mongoose');
const Note = require('../models/notes-schema');

class Notes {

  // Notes constructor
  constructor(options){
    this.action = options.command.action;
    this.payload = options.command.payload;
    options.category !== undefined ? this.category = options.category : this.category = 'uncategorized';
  }

  // executes a given function based on which action the user chose
  execute() {
    console.log(this);
    switch(this.action){
    case 'add': this.add(this.payload, this.category); break;
    case 'list': this.list(this.payload); break;
    case 'delete': this.delete(this.payload); break;
    default: break;
    }
  }

  // add note method
  async add(payload, category) {
    let noteEntry = {
      entry: payload,
      category: category,
    };
    let note = new Note(noteEntry);
    console.log(note);
    await note.save();
    mongoose.disconnect();
  }

  //delete note method
  async delete(payload) {
    await Note.findByIdAndDelete(payload);
    mongoose.disconnect();
  }

  async list(payload) {
    let allNotes = await Note.find({});
    console.log(allNotes);
    mongoose.disconnect();
  }

  // set rules for Notes object and call the validate method on it
  valid() {
    const rules = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true},
    };
    const validator = new Validator(rules);
    return validator.validate(this);
  }

}

module.exports = Notes;
