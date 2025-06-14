//Date 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());

console.log(typeof myDate); // Date is a Object


let myCreatedDate = new Date(2023 , 0 , 23) // 0 is the month (Jan) beacause it is array and the index position 0 which is month JAN
console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date("2023-01-14") // YY-MM-DD the date format can be written as this
console.log(myCreatedDateOne.toLocaleDateString());

let myCreatedDateTwo = new Date("01-14-2023") // MM-DD-YY
console.log(myCreatedDateTwo.toLocaleDateString());

let myTimeStamp = Date.now() // used for pole like who submit first or who not
console.log(myTimeStamp); // milli second value of a date
console.log(myCreatedDateTwo.getTime()); // from a created date  convert into mili second using getTime()
console.log(Math.floor(Date.now()/1000)); // from a created date  convert into second using now()


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()}` and the time 

newDate.toLocaleDateString('default',{
    weekday : "long"
})