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

/*in the case of need some elements and want to copy the ress in another array
we can do this:
 */

const largeArray = [1,2,3,4,5,6,]

const[lposition1, lposition2, lposition3, ...otherElements] = largeArray

console.log(largeArray)

//output: 1, 2, 3, [4, 5, 6]