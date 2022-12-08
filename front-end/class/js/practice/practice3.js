
// //shallow copy
// const abc = {
//     fname: "chaitu",
//     age:25,
// };
// let def = abc;
// console.log(def.fname = "chaitanya");
// console.log(abc.fname);

// //deep copy
// const a = {
//     fname: "chaitanya",
//     age:25,
// };
// const b = { ...a };
// b.fname = "chaitu";
// console.log(b.fname);
// console.log(a.fname);


// //shallow copy
// const d = {
//     namef: "chaitu",
//     age: 24,
// };
// const e = d;
// e.namef = "sai";
// console.log(e.namef);
// console.log(d.namef);
// const z = { ...d };
// z.age = 25;
// console.log(z.age);
// console.log(d.age);


// const spread = {
//     fname: "chaitu",
//     age: 24,
//     address: "nellore",
// };
// console.log(spread);

// const spread1 = {
//     fname: "sai",
//     age: 25,
//     addredd:"chennai",
// }
// const newobj = {
//     ...spread1,
//     ...spread

// }
// console.log(newobj);


// //spread operator

// const abc1 = {
//     name: "chaitu",
//     age: 25,
//     college:"narayana",
// };
// const abc2 = {
//     fname: "sai",
//     age: 24,
//     school:"sarada",
// }
// const objref2 = {
//     ...abc1,
//     ...abc2,
// }
// console.log(objref2);

// const obj = {
//     name: "sai",
//     age: "24",
// };
// const obj1 = {
//     name: "sai",
//     age: "25",
//     city: "nellore",
    
// }
// const objnew = {
//     ...obj,
//     ...obj1,
// }
// obj1.age = 24;
// console.log(objnew);
// console.log(obj1);



//this

// var age = "25";
// const age1 = {
//     name:"chaitu",
//     fn: function () {
//         console.log(this.age);
//     }
// }
// console.log(age1.age);


// var school = {
//     name: "chaitu",
//     age: 24,
//     fname : function () {
//         return this.name + " " +this.age;
//     }
// }
// console.log(fname());


// const schl = {
//     lname: "mottereddy",
//     fname: "lakshman",
//     sname: function () {
//         return this.lname + "" + this.fname;
//     }
// };
// console.log(schl.sname());


//this

// const name = {
//     fname: "chaitanya",
//     lname: "reddy",
//     sname: function () {
//         return this.fname + "motte" + this.lname;
//     }
// };
// console.log(name.sname());

// let this1 = this;
// "strict mode"
// console.log(this1);

//object binding

// const person = {
//     name: "chaitu",
//     age: "24",
//     school: "sarada",
//     college: function () {
//         return this;
//         0
//     },
// };
// console.log(person.college());

// var fname = {
//     x: 25,
//     getx: function () {
//         return this.x;
//     }

// };
// console.log(fname.getx().call(fname));


//call apply bind

// const call1 = {
//     fn: function () {
//         return this.fname + "" + this.lname;
//     },
// };

// const call2 = {
//     fname: "chaitu",
//     lname:"reddy",
// }
// const call3 = {
//     fname: "chaitanya",
//     lname: "reddyreddy",
// };
// const cn = call1.fn.call(call3);
// console.log(cn);

//apply

// const apply1 = {
//     fnapply: function (city,pincode) {
//         return this.fname + "" + this.lname;
//     },
// };
// const apply2 = {
//     firstname: "chaitu",
//     lname:"reddy",
// }
// const apply3 = {
//     fname: "chaitanya",
    
//     lname:"chaituapply3",
// }

// let xyz = {
//     ...apply2,
//     ...apply3
// };
// console.log(xyz);
// console.log(apply1.fnapply.apply(apply3, ["nellore",524002]));

const obj = {
    fname: "tarun",
    city: "hyd",
    
}
const obj2 = {
    fname: "chaitu",
    city: "nellore",
};
// function abc(pincode,phone) { 
//     return this.fname+""+this.city+""+pincode+""+phone;
// }
// console.log(abc.call(obj));
// console.log(abc.apply(obj2, [524002, 122455]));

let bind1 = function (pincode,phone) {
    return ( this.fname + "" + this.city + "" + pincode + "" + phone);
};
console.log(bind1.bind(obj2,542002,123455));


// let bind1 = function () { 
//     console.log(this.fname, this.city, this.lname, this.age);
    
// }
// bind1.bind(obj3);

