// console.log(window);
//in console we can see lot of properties and methods in that we can see the fetch method

//program 1

//this program is to send the data from the server to html page

// let output = document.getElementById("output");
// let p = fetch("fetch7.txt");
// p.then(function (x) {
//     x.text().then(function (y) {
//         output.innerHTML = y;
//     })
// })
// p.catch(function (error = 2) { console.log(error); })




//program2

// async function getText(textFile) {
//     let x = await fetch(textFile);
//     let y = await x.text();
//     document.getElementById("output").innerHTML = y;
//  };

// getText("fetch7.txt");


// async function gettxt(getData) {
//     let serverData =await fetch(getData);
//     let takenData = await serverData.json();
//     let final = JSON.parse(takenData);
//     console.log(typeof final);
//     document.getElementById("output").innerHTML = final;

// };
// gettxt("fetch5.json");


// async function getdata(parameter) {
//     let data = fetch(parameter);
//     let prom = data.json();
//     console.log(prom);
//     document.getElementById("output").innerHTML = prom;
// }
// getdata("fetch4.txt");


//program 3

// let p = fetch("fetch4.txt");
// p.then(function (param) {
//     param.text().then(function (brac) {
//         document.getElementById("output").innerHTML = brac;
//     })
// })


//program 4


// let p = fetch("fetch4.txt", {
//     method: "POST",
//     headers: {
//         "Content-type":"application/text",
//     },
//     body:"this is chaitanya",
// });
// p.then(function (data) {
//     data.text().then(function (outputData) {
//         console.log("output = "+outputData)
//      })
// })




// const data = { username: 'example' };

// fetch('fetch6.json', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });




// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });





const data = { username: 'example' };

fetch('fetch6.json', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });