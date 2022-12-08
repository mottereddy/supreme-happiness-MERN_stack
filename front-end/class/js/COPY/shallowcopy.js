

let obj1 = {
    name: "chaitu",
    age: 25
};
let objref = {... obj1 };
objref.name = "sai";
console.log(obj1.name);