
fn();
console.log("first line");
console.log("second line");
setTimeout(() => { console.log("third line") }, 2000);
console.log('fourth line');
function fn() { 
    console.log("FIFTH LINE FUNCTION");
}
