//dependencies
const Validator = require('./validator');
const mongoose = require('mongoose');
const Note = require('../models/notes-schema');

class Notes {

  // Notes constructor
  constructor(options){
    this.action = options.command.action;
    this.payload = options.command.payload;
    options.command.text !== undefined ? this.text = options.command.text : this.text = undefined;
    options.command.category !== undefined ? this.category = options.command.category : this.category = undefined;
  }

  // executes a given function based on which action the user chose
  execute() {
    switch(this.action){
    case 'add': this.add(this.payload, this.category); break;
    case 'list': this.list(this.payload); break;
    case 'update': this.update(this.payload, this.text, this.category); break;
    case 'delete': this.delete(this.payload); break;
    default: break;
    }
  }

  // update note method

  async update(payload, text, category) {
    if (text && category !== undefined) {
      await Note.updateOne({'_id': payload}, {'entry': text, 'category': category});
      console.log(`Updating note text to: ${text}`);
      console.log(`Updating note category to: ${category}`);
    } else if (text !== undefined) {
      await Note.updateOne({'_id': payload}, {'entry': text});
      console.log(`Updating note text to: ${text}`);
    } else if (category !== undefined) {
      await Note.updateOne({'_id': payload}, {'category': category});
      console.log(`Updating note category to: ${category}`);
    }
    mongoose.disconnect();
  }

  // add note method
  async add(payload, category) {
    console.log(`Adding note of '${payload}' with category: ${category}`);
    let noteEntry = {
      entry: payload,
      category: category,
    };
    let note = new Note(noteEntry);
    await note.save();
    mongoose.disconnect();
  }

  //delete note method
  async delete(payload) {
    await Note.findByIdAndDelete(payload);
    mongoose.disconnect();
  }

  async list(payload) {
    let allNotes;
    payload !== undefined ? allNotes = await Note.find({category: payload}) : allNotes = await Note.find({});
    allNotes.forEach(note => {
      console.log('');
      console.log(`Captain's Log`);
      console.log(`Star Date: ${note.id}`);
      console.log(`  "${note.entry}"`);
      console.log(`Category: ${note.category}`);
      console.log('');
      console.log('----------------------------------');
    });
    // console.log(allNotes);
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
