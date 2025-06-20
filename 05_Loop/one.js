// for of


const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log( num);
    
}

const greetings ="Hello-world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//  MAPS


const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India") // Map() does'nt copy duplicate thing
console.log(map);


for (const [key, value] of map) {
    console.log(key,':-', value);  // for of can work on MAP()
    
}

/*
const myObject = {
    game1: 'NFS',
    game: 'Spiderman'
}

for (const [key, value] of myObject) { 
    console.log(key,':-', value);        // for of loop can not work on Object
    
}

*/

// for in 

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {           // for in can work on Object
    console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js", "rb", "py", "java","cpp"]  // for in can work on Array

for (const key in programming) {
    console.log(programming[key]);  // value
    
}

const map2 = new Map()
map.set('IN',"India")
map.set('USA',"United States of America") // Map() is not itratable so it will not execute
map.set('Fr',"France")
map.set('IN',"India") 

for (const key in map2) {
    console.log(key);
    
}