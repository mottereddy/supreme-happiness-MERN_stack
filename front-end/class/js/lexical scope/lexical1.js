
// a variable defined outside a function can be accessible inside
//another function defined after the variable declaration


function outer() { 
    let y = 100;
    console.log(x);
    console.log(y);
    function inner() { 
        z = 300;
        console.log(z);
        console.log(x);
    };
    inner();
};
let x = 50;
outer();
//let x = 50;