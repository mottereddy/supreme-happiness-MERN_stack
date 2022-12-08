

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
//here we used call technique for this cal tech we can pass arguments as individuaal arguments

fn.apply(obj, ["inida", "bharat"]);
//here we passed apply technique for this apply tech we can pass arguments as array type

const bindfn = fn.bind(obj, "nellore", "andhra pradesh");
//here we used bind tech thus why it is goining to return a function 
//if we can call that function any time it will print output
bindfn(); //here we call bind functiion
