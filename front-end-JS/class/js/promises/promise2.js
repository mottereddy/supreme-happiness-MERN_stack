
const fn = new Promise(
    function (success,failed) { 
        let datacame = true;
        if (datacame) {
            success("Hello chaitanya data");
        } else { 
            failed("Hello sai from else");
        }
    }
);
console.log(fn);

fn.then(function (abc) {
    console.log(abc);
    console.log(fn);
});
fn.catch(function (xyz) { 
    console.log(xyz);
    console.log(fn);
})