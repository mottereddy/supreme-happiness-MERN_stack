//currying tech
function mul(a) { 
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
};

console.log(mul(5)(5)(5));

function mul1(a,b,c) { 
    return a * b * c;
}
let num = mul1(5, 5, 5);
console.log(num);