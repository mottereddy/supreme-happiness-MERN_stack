
const p1 = new Promise((res, rej) => setTimeout(() => {
    res("100")
}, 1000));

const p2 = new Promise((res, rej) => setTimeout(() => {
    res("2000")
}, 1000));


const p3 = new Promise((res, rej) => setTimeout(() => {
    rej("1000")
}, 1000));

Promise.race([p1, p2, p3])
    .then((somedata) => console.log(somedata))
    // .then((somedata) => console.log(somedata))
    .catch((error) => console.log(error));