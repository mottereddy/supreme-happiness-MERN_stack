



const obj = {
    name: "chaitu",
    age: 24,
    city: "hyderabd",
};

const newobj = JSON.parse(JSON.stringify(obj));

newobj.city = "banglore";
newobj.name = "ganesh";

console.log(newobj);
console.log(obj);