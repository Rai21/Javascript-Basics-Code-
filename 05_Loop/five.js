const  myNums= [1,2,3,]
/*
const myTotal = myNums.reduce(function(acc, currval){  // acc= accumulator,currval=current value
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval // the sum goes to the accumulator
},0) // first time accumulator value = 0
*/

// arrow function
/*
const myTotal = myNums.reduce((acc, curr) => acc+curr,0)

console.log(myTotal);
*/


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
