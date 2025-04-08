//destructuring with objects


//Traditional way:
const person = {

    name: "Juan",
    age: 19,
};

const tname = person.name
const tage = person.age

console.log(tname, tage)
//output: Juan, 19

//destructuring way:
/*
here, you need to use "{}" to defind the variables of the object
and also you have to use the same name of the variable of the object
*/
const {name, age} = person;

console.log(name, age)
//output: Juan, 19