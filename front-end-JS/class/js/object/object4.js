

//shallow copy means it is goining change orginal object also
//means if we want to change the properties of an copy object then it is goining to change orginal object also


const obj = {               //here the properties of obj             // here the properties of duplicate objref are
    name: "chaitu",         //const obj = {                         //const objref = { 
    age:24,                 //name: "chaitu",                       //name: "chaitu", 
};                         //  age:24,                              //  age:24, 
                         // };                                      // };
const objref = obj;
objref.name= "sai";

console.log(obj);
console.log(objref);