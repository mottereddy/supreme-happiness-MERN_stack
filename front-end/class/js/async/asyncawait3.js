
let res = fetch("async.txt");
let out = res.then(function f(param) {
    param.text().then(function (paramdata) {
        console.log(paramdata);
    })
})
 console.log(out);



async function f() { 
    let res = await fetch("async.txt");
    let out = await res.text();
    console.log(out);
}
f();


