//difference between call back hell and prommise


//promise syntax is user friendly and easy to read
//error handling is easier to manage

//call back hell is difficult to understand
//error handling may be hard to manage

function first() {
  setTimeout(() => {
      console.log("first");
      setTimeout(() => {
          console.log("second");
          setTimeout(() => {
            console.log("third");
          }, 1000);
      },2000)
  }, 3000);
};
first();



// let p = new Promise(function (success, error) {
//     success("first")
// });
// setTimeout(function () {
//     p.then(function (xyz) { 
//         console.log(xyz);
//     })
// }, 2000);
// setTimeout(function () {
//     p.then(function () { 
//         console.log("second");
//     })
// }, 3000);
