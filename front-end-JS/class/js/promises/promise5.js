
// let prom = new Promise(function (resolve, reject) {
//     resolve("reolved success");
//     reject("reject error");
// });
// prom.then(function (result) {
//     console.log(result);
// })
//     .then(function (result1) {
//         console.log("result2");
//     })

// function first(param) {
//     console.log("first");
//     param();
// };
// function second() {
//     console.log("second");
// };
// first(second);






function first() { 
    setTimeout(function () { 
        console.log("first");
        return function () { 
            console.log("second");
            return function () { 
                console.log("third");
            }
        }
    },2000)
};
first();