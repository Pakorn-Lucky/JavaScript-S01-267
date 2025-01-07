function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
    
}
console.log("\n********Try..Catch********\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
}
try{
    throw"an exception that is thrown every time";
}catch(ex){
    console.log("Got an error");
    logError(ex)
}


console.log("\n********Try..Catch..Finally********\n");

try {
    console.log("Hello");
    
    //criticalCode();
} catch(ex){
    console.log("Got an error");
    logError(ex);
    
}finally{
    console.log("Code that alway will run");
    
}
function hello() {
    console.log("\n***********Throwing Exceptions********\n");
    
}
