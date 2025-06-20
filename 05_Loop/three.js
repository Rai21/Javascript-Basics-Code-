// Type Casting
// let age = Number(prompt("What is your age ?"));
// age=Number(age);
// console.log(typeof age);
//--------------------------------------------------

//Swapping
// METHOD I
//let a = 10;
//let b = 20;
// let c;
// c = a ; //copy of a's value c=10,a=10(line 4)
// a = b ; // a=20, b=20
// b = c; // b=10

// METHOD II
// a = a+b // 10+20 =30
// b = a-b // 30-20 =10
// a = a-b // 30-10 =20

// METHOD III
//[a,b] = [b,a]; // Distructuring in JS Swapping
//console.log(a,b);
//-------------------------------------------------

//  ++,--

// let i=11;
// i=i++ + ++i;
// console.log(i);

let a = 11, b=22;
let c = a + b + a++ + b++ + ++a + ++b;
console.log("a="+a);
console.log("b="+b);
console.log("c="+c);