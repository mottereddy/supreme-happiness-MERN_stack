


function fn(){
    console.log(this);
}

const obj = {
    first: "chaitu",
    age : 25,
};

const obj1 = {
    first: "sai",
    age:24,
};
fn();