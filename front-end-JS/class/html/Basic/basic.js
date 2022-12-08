var num1 = 16 , name = "chaitu";
var num2 = 20;
console.log(document.getElementById("sampleJs").innerHTML = (num1 + num2));
console.log(document.getElementById("demo").innerHTML = (num1 - num2));
// console.log(document.getElementsByClassName("simple").innerHTML = (num1 + num2));
console.log(document.getElementsByClassName("simple")[0].innerHTML = (num1 * num2));

console.log(document.getElementById("sampleJs1").innerHTML = (num1 != num2));
console.log(document.getElementsByClassName("simple")[1].innerHTML = "this is in class block" (num1 == num2));