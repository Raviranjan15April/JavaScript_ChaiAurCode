/*
call() can be particularly useful when you want to borrow methods from another object or set the context for a function that you want to use in a different context.
*/

function setUserName(userName){
    this.userName = userName;
    console.log("==== setUserName called =")
}

function userDetails(userName, email, password){
    // setUserName(userName);                  // by using this way we are not getting the username set by this method
    setUserName.call(this, userName);          // if you use this way you will get the expected result.
    this.email = email;
    this.password = password
}

const newUser = new userDetails("john", "john@gmail.com", 123);
console.log(newUser);