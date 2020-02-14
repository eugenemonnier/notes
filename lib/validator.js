class Validator {

  constructor(rules) {
    this.rules = rules;
  }

  // validates user inputs create properly formed objects
  validate(object) {
    let result = true;

    for (let fieldName in this.rules) {
      let field = this.rules;
      
      let required = field.required ? this.isRequired(object[fieldName], field) : true;
      
      if (!required) {
        result = false;
      }
    }

    
    // const actions = Object.keys(object);
    // actions.length === 0 || !actions.length ? false : null;
    // if (object.action === 'list') {
    //   result = true;
    // } else {
    //   actions.every(action => 
    //     (this.rules[action] && this.rules[action].required && object[action] && this.rules[action].type === typeof object[action]) ? result = true : result = false);
    // }
    return result;
  }

  isRequired(input) {
    console.log(input);
    return !!(input);
  }

}

module.exports = Validator;