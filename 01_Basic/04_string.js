const name="Rai" // 1st way to assign String
const age=23
console.log(`Hello my name is ${name} and my age is ${age}`)// string interpolletion

const gameName = new String('rai-debn') // 2nd way to assign String
console.log(gameName[1]); // access key-value pair in object
console.log(gameName.__proto__);//output:{} //its assign prototype


console.log(gameName.length); //for knowing the length of the string
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//to know on which position which character are have
console.log(gameName.indexOf('d')); // to know which ccharacter  are placed on which position


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // slicing
console.log(anotherString);

const newStringOne = "  Rai  "
console.log(newStringOne);;
console.log(newStringOne.trim());



