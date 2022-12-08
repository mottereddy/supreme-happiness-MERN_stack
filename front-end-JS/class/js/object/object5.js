
//here we used deep copy 
//if we change the duplicate object value properties also orginal object value does not change 


const abc= {
    name1: "sai",
    age:24,
};

const objref = { ...abc };      
objref.name1 = "chaitanya";
console.log(abc);
console.log(objref);