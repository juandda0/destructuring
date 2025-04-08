//destructuring with objects


//Traditional way:
const person = {

    name: "Juan",
    secondName: "Diaz",
    age: 19,
};

const tname = person.name
const tage = person.age
const tsecondName = person.secondName

console.log(tname, tage, tsecondName)
//output: Juan, 19

//destructuring way:
/*
here, you need to use "{}" to defind the variables of the object
and also you have to use the same name of the variable of the object
*/
const {name, age, secondName} = person;

console.log(name, age, secondName)
//output: Juan, 19, Diaz

//also we can use another name of variable like this:
const {name: nameJuan, age: ageJuan, secondName: secondNameJuan} = person
console.log(nameJuan, ageJuan)
//output: Juan, 19

//and if you want to only create 1 variable, and the ress of variable you want to save in a sub-obj you can do this:
const {name: nameJuan2, ...ressPerson} = person

console.log(nameJuan2, ressPerson)
//output: Juan { secondName: 'Diaz', age: 19 }
