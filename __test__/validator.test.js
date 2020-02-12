// dependency
const Validator = require('../lib/validator');

let rules = {
  action: { type: 'string', required: true },
  payload: { type: 'string', required: true },
};
const validator = new Validator(rules);
let object = { action: 'add', payload: 'bup-bup' };


describe('Validator module', () => {
  // test validate() to ensure that given properly formed object returns true
  test('validate() returns true with properly formed object', () => {
    expect(validator.validate(object)).toStrictEqual(true);
  });

  // test validate() to ensure that given an improperly formed object returns false
  test('validate() returns true with properly formed object', () => {
    object = 'bup-bup';
    expect(validator.validate(object)).toStrictEqual(false);
  });

  // test validate() to ensure that given an improperly formed rules object returns false
  test('validate() returns true with properly formed object', () => {
    rules = {action: {required: 'bup-bup'}};
    expect(validator.validate(object)).toStrictEqual(false);
  });

});
