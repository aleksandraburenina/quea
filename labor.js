function createPerson(name, age) {
    const person = {}; // Create an empty object.

    person.name = name; // Set the name property.
    person.age = age;   // Set the age property.

    return person;
}

const john = createPerson("John", 25);
console.log(john); // Outputs: { name: 'John', age: 25 }

const jane = createPerson("Jane", 28);
console.log(jane); // Outputs: { name: 'Jane', age: 28 }
