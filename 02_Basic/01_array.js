const myArr = [0,1,2,3,4,5] // number basis array
const myHeros =["Spiderman","Ironman"]// String basis array

//const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

// Shallow copy: A shallow copy of an object is a copy whose properties share the same references point.If any change in copy data it will change then original data also
// Deep copy: A deep copy of an object is a copy whose properties do not share the same references point.

//Array methods

/*
myArr.push(6) //  push Works as Add element into the array
myArr.push(7) //  push Works as Add element into the array
myArr.pop() // pop remove the last element fro the array
myArr.unshift(9) // unshift works as add element in begining 
myArr.shift()


console.log(myArr.includes(9)); // includes() function asks question if there the given value as or not
console.log(myArr.indexOf(3)); // indexOf() function is used for knowing the index number



const newArr = myArr.join() // join() function bind the arrays and change the type also
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);
*/

// slicw, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  // inclue 1,2 ,not the last one
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // splice() function remove the sliced elements
console.log("C", myArr);
console.log(myn2);