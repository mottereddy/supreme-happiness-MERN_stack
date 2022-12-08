
const prom1 = new Promise((res, rej)=>{ 
    res("10");
});
const prom2 = new Promise((res, rej) => { res("100") });
const prom3 = new Promise((res, rej) => { rej("1000") });

Promise.all([prom1, prom2, prom3])
    .then((somedata) => console.log(somedata))
    .catch((error) => console.log(error));

    Promise.allSettled([prom1, prom2, prom3])
    .then((somedata) => console.log(somedata))
    .catch((error) => console.log(error));

Promise.allSettled([prom1, prom2, prom3])
    .then((somedata) => somedata.map((item) => console.log(item.status)))
    .catch((error) => { console.log("error") });
    
    
Promise.allSettled([prom1, prom2, prom3])
    .then((somedata) => somedata.map((item) => console.log(item)))
    .catch ((error) => { console.log("error") });