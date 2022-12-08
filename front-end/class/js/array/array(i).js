// let arr = [1, 2, 3, 4, 5, 6];

// //.toString method is going to convert from array to string
// //it will not effect the orginal array

// console.log(arr.toString());

// // join method will jpin the element or symbol in between the spaces of the array
// ////it will not effect the orginal array

// console.log(arr.join("+"));
// console.log(arr);
// //push method is goining to add the data at end of the array
// //it will not effect the orginal array
// console.log("push method  = "+arr.push(7));
// console.log("after push method = "+arr);

// //pop:-it will delete the element at end of the array
// console.log("pop method  = " + arr.pop(7));
// console.log(arr);

// //slice
// console.log("slice method  = " + arr.slice(1, 4));
// console.log(arr);

// let fname = "chaitanya";
// console.log(fname.replace("chaitanya", "sai"));
// console.log(fname);

// console.log(fname.substring(2, 6));

// let lname = 'reddy';
// console.log(fname.concat(lname));


// console.log(fname.split(""));


let f = ['abc', 'deh', 'hia', 'ghi', 'jlkt', 'mniu'];
let at = (f.splice(-1,-5));
console.log(at);