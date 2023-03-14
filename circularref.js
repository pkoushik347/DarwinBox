const { stringify } = require('circular-json')
const person = {
    name: 'John Doe',
    age: 30,
    creator: person,
};
console.log(person);

const jsonString = stringify(person);
console.log(jsonString);