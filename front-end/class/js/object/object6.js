

//spread operator

const obj = {
    name: "chaitu",
    age: 24,
    city:"nellore",
};

const objref = {
    name: "sai",
    age: 25,
    city: "chennai",
    mobile: 017,          // here  the mobile value changes because it will calculates the hexadecimal 
};                         //if we given 017 means the output value will show 15

const newobj = {
    ...objref,
    ...obj,
};
console.log(newobj);