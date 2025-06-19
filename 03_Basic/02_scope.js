/*

{
        this is scope
}

block scope/local scope
Global scope

*/
 
function one(){   // parent function
    const username="rai"

    function two(){   // baby function
        const website = "youtube"
        //console.log(username);
    }
    // console.log(website); // it will not be execute because website is local scope
    two()
}
one() // it is also not execute

// *************  interesting  *************
console.log(addone(5))
function addone(num){
    return num + 1
}                       // 1st type of declaring function

// hoisting
console.log(addTwo(5))   // can not access before declaration because addTwo is a variable wrap in const
const addTwo = function(num){
    return num + 2              // 2nd type of declaring function
}
