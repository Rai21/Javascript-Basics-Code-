const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]
/*
marvel_heros.push(dc_heros) // push() functrion add the element of another array into an array buut it gives a single space
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros) // merge all array
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // ... is spread operator which works as multiple value can add but it gives a new array
console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // Flat() Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

*/

//Data Scrapping
console.log(Array.isArray("Rai")) // it question the element is the element is array or not
console.log(Array.from("Rai")) // it convert an element(object,string) into array element
console.log(Array.from({name:"Rai"})) // interesting method. from() needs to know in object for which key or value needs to be array

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3)); // Returns a new array from a set of elements.


