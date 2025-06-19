const user ={
    username:"rai",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this)
        
    }
} // the total const user is CURRENT CONTEXT and this is used only in the block
// user.welcomeMessage()
// user.username = "guddu"  // change the context from rai -> guddu
// user.welcomeMessage()
//console.log(this) // under node it gives {} empty 
// Under browser Object called it : Window Object(global object)


// Arrow Function
/*
function chai(){
    let username = "Sneha"
    console.log(this.username);  //  under function (this) can not work
    
}
chai()
*/
/*
const chai = function(){
    let username = "Sneha"
    console.log(this.username);
}
chai()


const chai = () => {
    let username = "Sneha"
    console.log(this);
}
chai()
*/
/* Basic Arrow Function
const addTwo = (num1,num2) => {
    return num1 + num2     // Explicit return
}
    */

const addTwo = (num1,num2) => num1 + num2 // implicit return
const addTwo = (num1,num2) => (num1 + num2) 
const addTwo = (num1,num2) => ({username:"Rai"}) // Object is declared under paranthesys
console.log(addTwo(3,4));

