



function sample(equal1) {
    console.log("solution1");
    equal1();
}

function sample2() {
    console.log("solution2");
}

sample(sample2); //here sample2 acts like a call back function
                // sample acts like a first class function



function sample3() {                   // here this function is a first class function
    console.log("this is chaitu");
    return function() {
        console.log("this is inside annonymous function");
    };
}
const name4 = sample3();
console.log(name4);