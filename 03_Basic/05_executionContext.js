/*
********* JS Execution Context **********
-> JS execution is 2 types
    i)   Global EC
    ii)  Function EC
    iii) Eval EC
-> JS is single threaded
-> Under Browser {Js code} -> Global EC (this).The value of this() is Window Object
-> {JS code} run with 2 phase:
    i)Memory creation phase
    ii)Execution Phase

-> Write a program on Add two numbers 
let val1 = 10
let valu2 = 5
function addNum(num1,num2)  // defination Of the function 
    let total = num1 + num2 // defination Of the function 
    return total            // defination Of the function 
}                           // defination Of the function 
let result1 = addNum(val1, Val2)
let result2 = addNum(10, 2)

-> How The code execute step-by-step  in js Engine
1) Global Execution
         |
         V
        this         
2) Memory phase (cycle 1)
    val1-> undefined
    val2-> undefined
    addNum-> defination Of the function  
    result1-> undefined     
    result2-> undefined
3) Execution phase(cycle 2)
    val1<-10
    val2<-5
    addNum->create another Execution context
     |     _________________________________
     |      | new variable environment      |
     |      |            +                  |-> Fter execution 
     |      |     execution thread          |   it will be Deleted
     |      |_______________________________|
     |                      |
     |                      V
     |       i) Memory Phase 
     |        val1-> undefined
     |        val2-> undefined
     |        total-> undefined
     |       ii) Exection Context
     |        num1->10
     |        num2->5
     |        total-> 15 ( return in Global execution context)
     |
     |
     V
     After completing another Execution context
     result1 = 15
     result2= ? // repeat the same work 
     addNum(10,20->create another Execution context
     |     _________________________________
     |      | new variable environment      |
     |      |            +                  |-> Fter execution 
     |      |     execution thread          |   it will be Deleted
     |      |_______________________________|
     |                      |
     |                      V
     |       i) Memory Phase 
     |        val1-> undefined
     |        val2-> undefined
     |        total-> undefined
     |       ii) Exection Context
     |        num1->10
     |        num2->2
     |        total-> 15 ( return in Global execution context)
     |
     |
     V
    result= 12
    
*********  CALL STACK ********


|                      |
|       THREE()        |
|______________________|
|       TWO()          |    -> LIFO principal for execution
|______________________|
|       ONE()          |
|______________________|
| GLOBAL EXECUTION     |
|______________________|

-> In browser -> source -> snippet -> new snippet 
function one(){
    console.log("One") // break
    two()
}
function two(){
    console.log("two") // break
    three()
}
function three(){
    console.log("three") // break
}
one()     // break
two()     // break
three()   // break




*/