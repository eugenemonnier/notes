const Notes = require('../lib/notes');

jest.spyOn(global.console, 'log');


describe('Notes module', () => {
  // test for execute()
  // make sure if invalid input, execute() does nothing
  it('execute() does nothing when the options are invalid', () => {
    const willFail = { command: {'x': 'coconut'} };
    const notes = new Notes(willFail);
    notes.execute();
    expect(console.log).not.toHaveBeenCalled;
  });

  // tests if valid input with action add is used, that the add() function gives expected results
  it('Notes.prototype.add() can add a note', () => {
    const action = 'add';
    const payload = 'works';
    const notes = new Notes({ command: { action, payload}})
    notes.execute();
    expect(console.log).toHaveBeenCalledWith(`Adding note: ${payload}`);
  })

});