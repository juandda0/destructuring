console.clear(); 
/*
But what happend wen you need some specic positions?
That´s where skipping elements in array destructuring comes in
*/
const array = [12,21,8]

const[,position2, position3 ] = array

console.log(position2, position3)

/*
nposition2 = array2[1] -> 21
nposition3 = array2[2] -> 8
*/