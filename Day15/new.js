const person = {
    id: 1,
    name: 'John',
    age: 30,
};

//! example 1 copying by value
const tempPerson={}
person.id=2;
tempPerson.id=person.id;
tempPerson.id=100;
tempPerson.name=person.name;
tempPerson.age=person.age;
console.log(person);
console.log(tempPerson);

//! example 2 copying by reference
const tempPerson2 ={}
for (let key in person){
    tempPerson2[key]=person[key];
}
console.log(person);

//! example 3 copying by value
const tempPerson3 = Object.assign({},person);
tempPerson3.id=9;
person.id=10;
console.log(person);
console.log(tempPerson3);

//!Object to JSON
const jsonPerson = JSON.stringify(person);
console.log(person);
console.log(jsonPerson);

//!Json to Object
const objPerson = JSON.parse(jsonPerson);
console.log(objPerson);

// can value of object in function but dont return value 
// array referenece 