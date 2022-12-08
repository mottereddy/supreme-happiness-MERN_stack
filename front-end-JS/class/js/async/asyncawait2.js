
async function f() {
    z =  5 + 5;
    console.log("outside function");
    console.log(z);
    console.log("hello");
    return z;
};

f().then(function (data) { console.log(data); });