const score = 400 
//console.log(score); // normal assigning number
const balance= new Number(100) // its assign Number as a array
//console.log((balance)); // output: [Number  : 100]
//console.log(balance.toString().length); // balance was in Number format if toString() function is used it will be String and can count the length
//console.log(balance.toFixed(2)); // its used in decimal point if 2 toFixed => 100.00 if 3 toFixed => 100.000

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4)); // used for precision

const hundreds = 100000
//console.log(hundreds.toLocaleString()); //it is default US number standard for separating numbers in COMMA. Output: 100,000
//console.log(hundreds.toLocaleString('en-IN')); // now it convert into India number.output: 10,00,000


// ************ Maths *************
/*
console.log(Math);
console.log(Math.abs(-4)); // abs = absolute values which convert a nagetive number to positive
console.log(Math.round(4.3)); // round menas round off values
console.log(Math.ceil(4.2)); // ceil means ceiling value which is take upper value.output:5
console.log(Math.floor(4.2)); // floor means ceiling value which is take upper value.output:4
console.log(Math.sqrt(36));
console.log(Math.min(3,6,2));
console.log(Math.max(3,6,9));
*/

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1))+ min)
