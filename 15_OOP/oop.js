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
console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);

