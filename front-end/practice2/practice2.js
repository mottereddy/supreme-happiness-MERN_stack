// const name1 = document.getElementById("name");
// const age = document.getElementById("age");
// const phno = document.getElementById("phno");
// const submit = document.getElementById("submit");

// console.log(name1.value);
// function click() {
   
// }



// function outer() {
//     var x = 10;
//     function inner() {
//         console.log(x);
//     }
//     return inner();
// }
// var res = outer();
// res()


function num1(number1) { 
    function num2(number2) { 
        console.log(num1 + num2)
    }
    return num2
} 
var ref = num1();
ref()
