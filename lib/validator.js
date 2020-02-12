

class Validator {

  constructor(rules) {
    this.rules = rules;
  }

  // validates user inputs create properly formed objects
  validate(object) {
    // console.log(this);
    // console.log(object);
    // console.log(this.rules);
    const actions = Object.keys(object);
    // console.log(actions);
    actions.length === 0 || !actions.length ? false : null;
    return actions.every(action => this.rules[action] && this.rules[action].required && object[action] && this.rules[action].type === typeof object[action] ? true : false);
  }
}

module.exports = Validator;