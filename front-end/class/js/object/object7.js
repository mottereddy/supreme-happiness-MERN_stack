

const obj = {
    name:"chaitu",
    // age: 24,
    city:"chennai",
};
const objref = {
    name: "sai",
    age: 24,
    address: {
        city:"nellore",
    },
};
const newobj = {
    ...objref,
    ...obj,
}
// newobj.age = 21; 
console.log(newobj);
console.log(objref);