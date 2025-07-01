// 1.this keyword

const user ={
    username : "Rai",
    loginCount : 8,
    signedIn : true,


    getUserDetails : function(){
        //console.log("Got users details from database");
        // console.log(`Usernam: ${this.username}`);
        console.log(this);
        
        
        
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// 2.Constructor function

//const promisOne = new Promise()
//const date = new Date() // new is used for Constructor function

function User(username, logicCount, isLoggedIn){
    this.username = username
//      |               |
//     V               V 
//    VARIABLE      value for pass
    this.logicCount= logicCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome${this.username}`);
        
    }
    return this // by default implicitly return this
} // .this() is actually object

// const userOne =  User("Rai",12,true)
// const userTwo =  User("Rai",11,false)

// console.log(userOne); // it will overWrite
const userOne = new User("Rai",12,true)
const userTwo = new User("Rai",11,false)
console.log(userOne.constructor); // [Function: User]

console.log(userOne);
// new keyword genarate a empty keywordd {} called new object and called Instance
