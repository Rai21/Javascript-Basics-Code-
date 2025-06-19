// const tinderUser= new Object() // Sigleton Object
const tinderUser ={}  // Non-Singleton Object

tinderUser.id="123abc"
tinderUser.name="Rai"
tinderUser.isLoggedIn =false

//console.log(tinderUser);

const regularUser ={
    email:"rai@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rai",
            lastname:"debanath"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


//const obj3 ={obj1, obj2}
//const obj3= Object.assign({} ,obj1, obj2, obj4) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const obj3 = {...obj1, ...obj2, ...obj4} // simple spread operator
// console.log(obj3);

const users = [
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    }
]
/*
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // objects key returning in array form
console.log(Object.values(tinderUser)); // objects value are returning in array form
console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable own properties of an object

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Determines whether an object has a property with the specified name.
*/

// Distructuring

const course ={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}

//console.log(course.courseInstructor);
const {courseInstructor:Instructor}  = course
//console.log(courseInstructor);
console.log(Instructor);

/*
{
    "coursename":"js in hindi",
   " price":0,
    "courseInstructor":"hitesh" // it is API Json, its may be in object
} 
[
    {},
    {},
    {}
] // API may be in array
*/
