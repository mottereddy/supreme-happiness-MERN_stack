



const obj = {
    name: "chaitu",
    age: 24,
    id:1234,
};
Object.freeze(obj);  // the freeze method will goining to freeze the object attributes

//the seal method Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
Object.seal(obj);  // in other words it is goining to lock the attributes it wont change

console.log(Object.keys(obj));  //it will get only keys

console.log(Object.values);


console.log(obj.hasownproperty("name"));


