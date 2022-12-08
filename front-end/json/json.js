
// function sum(a,b,c) {
//     console.log(a + b + c);
// }
// sum(1, 2, 3);

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return(a + b + c);
//         }
//     }
// }
// console.log(sum(1)(2)(3));



// function sum(a, b, c) {
//     console.log(a+b+c);
// };
// sum(1, 2, 3);


// function sum1(a) {
//     return function (b) {
//         return function (c) {
//             console.log( a + b + c);
//         }
//     }
// };
// sum1(1)(2)(3);



//call

// function sum(city, pincode) {
//     return this.fname + "" + this.lname+""+city+pincode;
// };
// const obj = {
//     fname: "chaitu",
//     lname:"reddy",
// }
// const obj2 = {
//     fname: "chaitanya",
//     lname:"mottereddy",
// }
// console.log(sum.call(obj, "nellore", "524002"));
// console.log(sum.apply(obj2, ["banglore", "560075"]));


// const bind1={
//     ffname: "chaitanya",
//     llname: "reddy",
//     ssname: function (mname,ssname) {
//         return this.ffname + "" + this.llnamelname, mname, ssname;
//     }

// }

// const oobj = {
//     fname: "chaitanya",
//     lname:"reddyreddy",
// }

// let some = bind1.ssname.bind(oobj);
// console.log(some);


// const obj = {
//     fname: "chaitu",
//     lname: "reddy",
// };
// const obj2 = {
//     fname: "chaitanya",
//     lname: "mottereddy",
// };
// function some() {
//     return this.fname + "" + this.lname;
// };


// const abc = () => { };
// let come = some.bind(obj2);
// console.log(come);


