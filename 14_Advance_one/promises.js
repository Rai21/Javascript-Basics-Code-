// 1. promise 1

const promiseOne = new Promise(function(resolve, reject){
    // Do an asyncs task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // connect with .then()
    },1000)
})

// consumption promises

promiseOne.then(function(){ // connect with resolve()
    console.log("Promise Consumed");
    
})

// 2. promise 2

new Promise(function(resolve, reject){ // we can write promise() without variable
    setTimeout(function(){
        console.log("Async task 2");
        resolve()       
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
}) // only .then() is used beace no variable are present

// 3.Promise 3

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "rai", email: "chatterjeearijit013@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

// 4. promise 4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        // let error =false
        if(!error){
            resolve({username: "Rai", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

//promiseFour.then().catch() // if get ERROR then catch() used for getting value
promiseFour
.then((user)=>{
    console.log(user);
    return user.username 
})
.then((username)=>{
    console.log(username);
     // chaining
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=> console.log("The promise is either resolve or rejected"))

// 5. promise 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =true // it will vary
        // let error = false  // it will vary
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }else{
            reject('ERROR: Js went wrong')
        }
    },1000)
})
// async function consumePromiseFive(){
//         const response = await promiseFive
//         console.log(response);
        
// }
// consumePromiseFive()  // this is async-await part

async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
            
        }
        
}
consumePromiseFive()

