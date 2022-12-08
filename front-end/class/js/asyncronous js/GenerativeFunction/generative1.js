
function* fn() {
    console.log("first log");
    yield 100;

    console.log("second log");
    yield 200;
};
const fnobj = fn();

console.log(fnobj.next());
console.log(fnobj.next());
console.log(fnobj.next());