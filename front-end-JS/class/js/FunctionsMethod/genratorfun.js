
function* gen() { 
    yield 10;
    yield 20;
    yield 30;
};
const genobj = gen();
console.log(genobj.next()); 
//if we call one time .next it will prints only one output the output is
//{ value: 10, done: false }

console.log(genobj.next());//here we are calling again,again it will print another output
//{ value: 20, done: false }

console.log(genobj.next()); //here we are calling again,again it will print another output
//{ value: 30, done: false }

console.log(genobj.next()); //here we are calling again,again it will print another output
//{ value: undefined, done: true }