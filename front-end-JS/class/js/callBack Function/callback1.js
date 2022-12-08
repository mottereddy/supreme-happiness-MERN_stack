
// function first(param) {
//     console.log("hello");
//     param();
// };
// function callback() {
//        console.log("chaitu");
// };
// first(callback)


function first(name,param1) { 
    console.log("hello"+""+name);
    param1();
};
function second(param2) {
    console.log("chaitanya");
};

setTimeout(first,2000,"sai",second,6000);

