// Immediately Invoked Function Expression(IIFE)

(function chai(){
    // named iffie
    console.log(`DB CONNECTED`);
})(); // here ; is important because after one exxxpression another will work. it's two iffie
// IIFE is mainly used when global scope have pollution and it create problem,for removing pollution iife is used
// () // 1st paranthes is Definition of function
// () () // 2nd paranthesis is for execution 

( (name) => { // here name is parameter(unnamed iffe)
    console.log(`DB CONNECTED TWO ${name}`);
})('rai') // rai  is arguments