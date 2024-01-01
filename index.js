
const proto = require('./protobuf-quickstart_pb');

const person = new proto.Person();

person.setName('Hello');
person.setId(100);
person.setEmail('deva@gmail.com')

const binary = person.serializeBinary();
console.log('binary data', binary);
const deserializedPerson = proto.Person.deserializeBinary(binary);

console.log("Name:", deserializedPerson.getName());
console.log("ID:", deserializedPerson.getId());
console.log("Email:", deserializedPerson.getEmail());

console.log("============PersonList example ==================");

const personList = new proto.PersonList();

personList.addEmployees(person);
const personListBinary = personList.serializeBinary();
const deserialisedPersonList = proto.PersonList.deserializeBinary(personListBinary);
const employees = deserialisedPersonList.getEmployeesList();

console.log("List size:", employees.length);
console.log("Name:", employees[0].getName());
console.log("ID:", employees[0].getId());
console.log("Email:", employees[0].getEmail());


