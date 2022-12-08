


const obj11 = {
    name: "chaitu",
    city: "chennai",
    fn:function () {
        console.log(this.name, this.city);
    }
};
const obj12 = {
    name: "chaitanya",
}
obj11.fn();   //output as --> chaitu chennai
obj11.fn.call(obj12);   //output as --> chaitanya undefined


//to maintain this type of data we have call apply bind techniques


//program example

function fn(p1,p2) { 
    console.log(this.name,this.city,p1,p2);
};

const obj = {
    name: "chaitu",
    city: "banglore",
}

const obj1 = {
    name: "sai",
    city: "nellore",
};

const obj3 = {
    name: "chaitnaya",
    city:"hyderabad",
};
fn.call(obj, "chennai", "Tamilnadu");
fn.apply(obj, ["inida", "bharat"]);
const bindfn = fn.bind(obj, "nellore", "andhra pradesh");
bindfn(); //here we call bind functiion