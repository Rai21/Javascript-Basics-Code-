// singleton : if any object made with constructor it'll called singleton
// Multiple instances (object literals): made with literals 
// Object.create // Constructor method used in Singleton


//object literals

const mySym = Symbol("key1") //declare symbol
const jsUser = {
    name: "Rai",
    "full name":"Sneha Debnath",
    [mySym] : "myKey1", // symbol syntax always covered with square bracket
    age: 18,
    location:"Jaipur",
    email:"snehadebnath1@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Sunday"]
}
/*
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
*/
jsUser.email ="rai@chatgpt.com" // change the email, overwrite the value
//Object.freeze(jsUser) // cannot access or modify the jsuser
jsUser.email = "rai@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user!");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user!,${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


