
console.log("line1");
console.log("line2");
console.log("line3");
console.log("line4");

//if i given 1 line as a error then the next lines will not be executed
//thus why we used try catch block to handle the error

try {
    console.log("line1");
    console.log(line2);
//here line2 is a variable it is not declared thus why it is an error thus why we use try catch block
}
catch (error) {
//here we are passing the error to the catch block
//whatever the error in try block it is passing the error to the arguments of catch block
    console.log("error = "+error);
    console.log("errorName = "+error.name);
    console.log("errorMessage = "+error.message);

 }
console.log("line3");
console.log("line4");






try {
    console.log("line1");
    console.log("line2");
    console.log("inside try block");
}
catch (error) {
     console.log("inside catch block");
    console.log("error = "+error);
    console.log("errorName = "+error.name);
    console.log("errorMessage = "+error.message);

 }
console.log("line3");
console.log("line4");




