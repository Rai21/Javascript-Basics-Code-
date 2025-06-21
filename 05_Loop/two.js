//forEach
/*
var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val+" hello");  // foreach does't return
});
*/

//----------------------------------

//map
/*
var arr = [1,2,3,4];
var newarr=arr.map(function(val){
    return val*3;
})
console.log(newarr);
*/



//----------------------------------

//filter
/*
var arr = [1,2,3,4];
var ans=arr.filter(function(val){
    if(val >= 3) { return true}  // filter return values
    else return false;
})
console.log(ans);
*/
/*
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
*/
//----------------------------------

/*
return
function abcd(){
    return "rai"
}
var ans=abcd();
*/

//----------------------------------