function sayMyName(){  
    console.log("S");
    console.log("N");
    console.log("E");
    console.log("H");
    console.log("A");
}

// sayMyName()    //sayMyName = reference, () = execution
/*
function addTwoNumbers(number1, number2) { // (number1, number2) = parameters
    console.log(number1+number2);
}
addTwoNumbers(3,null) // (3,null) = Arguments
*/

function addTwoNumbers(number1, number2) { // (number1, number2) = parameters
    //let result = number1+number2
    //return result  
    //console.log("rai"); // after return statement console can not work
    return number1+number2 // can add in one line under return statement
    
}

const result = addTwoNumbers(3,4)
//console.log("Result: ", result);


function loginUserMessage(username ="sam"){ // if no one visit then(username="sam") will be print
    if (username === undefined){ // undefined means false value we can write it like (!username)
        console.log("please enter a username")
        return
    }
    return `${username} just loggged in`
}
// console.log(loginUserMessage("RAi"));
// console.log(loginUserMessage());

function calculateCarPrice(...num1){ // ... is rest operator also.
    return num1
}
//console.log(calculateCarPrice(200,400,500,2000));


// Object --> fnction convertion
const user = {  
    username:"rai",
    price:999
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({ 
    username:"Sneha", // pass Object
    price:399
})

const myNewArray =[200,400,100,600]
function returnSecondvalue(getArray){ // pass array
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));
