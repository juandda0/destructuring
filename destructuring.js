console.clear();
console.log("hola")


/*
We use destructuring to extract values from arrays or objects properties
into separete variables in a more concise way
*/


//No destructuring
const array = [12,21,8]

//Defind each variable with an array position
const position1 = array[0]
const position2 = array[1]
const position3 = array[2]

//input: 12, 21,8
console.log(position1, position2, position3)

/*----------------------------------------------*/
//With destructuring

//we have an array
const array2 = [2, 7, 99]
/*
first we use the same array syntax at the left side of assignment to deffind the variables
and the right side should be the array
*/
const [nposition1, nposition2, nposition3] = array2;

/*
what we did was assing each variable to each position in the array sequentially

nposition1 = array2[0] -> 2
nposition2 = array2[1] -> 7
nposition3 = array2[2] -> 99

*/

//input: 2, 7, 99
console.log(nposition1, nposition2, nposition3);
