const { registerSchema, validate } = require('class-validator');


const UserValidationSchema = {
  // using interface here is not required, its just for type-safety
  name: 'myUserSchema', // this is required, and must be unique
  properties: {
    firstName: [
      {
        type: 'minLength', // validation type. All validation types are listed in ValidationTypes class.
        constraints: [2],
      },
      {
        type: 'maxLength',
        constraints: [20],
      },
    ],
    lastName: [
      {
        type: 'minLength',
        constraints: [2],
      },
      {
        type: 'maxLength',
        constraints: [20],
      },
    ],
    email: [
      {
        type: 'isEmail',
      },
    ],
  },
};

console.log(registerSchema(UserValidationSchema))


const user = { secondName: 'Cage', email: 'johny.com' };

validate('myUserSchema', user).then(errors => {
  if (errors.length > 0) {
    console.log('Validation failed: ', errors);
  } else {
    console.log('Validation succeed.');
  }
});