
const prom1 = new Promise((res, rej) => {
    res("this is resolved");
});
console.log(prom1); //in console we see the promise state is resolved


const prom2 = new Promise((res, rej) => {
    rej("this is resolved");
});
console.log(prom2); //in console we see the promise state is rejectes
    