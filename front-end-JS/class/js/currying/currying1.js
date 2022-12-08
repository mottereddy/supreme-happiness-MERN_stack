
function abc() { 
    console.log('1');
    return function () { 
        console.log('2');
        return function () { 
        console.log('3');
        }
    }
}
console.log(abc()()())