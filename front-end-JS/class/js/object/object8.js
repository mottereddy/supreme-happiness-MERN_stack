


const obj = {
    name: "sai",
    age: 21,
    city:"chennai",
};
const objref = {
    name: "sai",
    // age: 24,
    address : {
        city:"hyderabad",
    },
};


const newref = {
    ...obj,
    ...objref,
};
newref.address.city = "banglore";
console.log(newref);
console.log(objref);


// console.log(newref);
// console.log(obj);


// console.log(newref);
// console.log(obj);