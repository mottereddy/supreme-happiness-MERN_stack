



const obj = {
    name: "chaitu",
    age: 24,
    city: "hyderabd",
};
const objref = {
    name: "sai",
    address: {
        city: "hyderabad",
    },
};
const newobj = {
    ...obj,
    ...objref,
}
newobj.address.city = "banglore";
newobj.name = "ganesh";
console.log(newobj);
console.log(objref);