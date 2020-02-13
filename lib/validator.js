class Validator {

  constructor(rules) {
    this.rules = rules;
  }

  // validates user inputs create properly formed objects
  validate(object) {
    console.log(object);
    const actions = Object.keys(object);
    actions.length === 0 || !actions.length ? false : null;
    return actions.every(action => this.rules[action] && this.rules[action].required && object[action] && this.rules[action].type === typeof object[action] ? true : false);
  }
}

module.exports = Validator;