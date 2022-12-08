

// setTimeout((name) => {
//     console.log("hello " + name);

// },3000,"chaitu");



// setInterval(() => {
//     document.getElementById("date").innerHTML = "called";
// }, 2000);


// let counter = 0;
// let x = setInterval(test, 2000, "chaitu");
// function test(name) {
//     console.log("hello" + name);
//     alert("hello " + name+" " + counter);
//     counter++;
//     if (counter >= 5) {
//         clearInterval(x);
//     }
// }





setInterval(() => {
    console.log("hello chaitu")
    setTimeout(() => {
        console.log("how are you");
    }, 3000);
}, 4000);