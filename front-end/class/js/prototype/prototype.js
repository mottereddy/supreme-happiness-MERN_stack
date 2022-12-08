

const obj = {
    name: "chaitu",
};

const obj1 = {
    name: "sai",
};
Object.prototype.fn = function () {
    console.log("inparent");
}   
 
obj.fn();
obj1.fn();
 


//here we added function in object prototype thus why it can access to both obj and obj1
//and the output will be
//for obj--> {fn: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}
//for obj1--> {fn: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}

// here the properties all are same 