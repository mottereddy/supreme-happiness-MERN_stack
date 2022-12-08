let n = 10;
let m = 16
let p = new Promise(function (resolve, reject) {
    resolve(n != 10);
    reject(m == 16);
})
p.then(function (success) {
    console.log("success = " + success);
});
p.catch(function (error) { 
    console.log(error+"error");
})
 